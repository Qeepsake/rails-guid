const fs = require('fs');
const { Octokit } = require('@octokit/rest');
const axios = require('axios');

const githubToken = process.env.GITHUB_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

const octokit = new Octokit({
  auth: githubToken,
});

async function getPullRequestFile() {
  const { owner, repo, issue_number } = process.env;
  const pr = await octokit.pulls.get({ owner, repo, pull_number: issue_number });
  const files = await octokit.pulls.listFiles({ owner, repo, pull_number: issue_number });

  // Get the first changed file for simplicity; adjust as needed
  const file = files.data[0];
  return {
    path: file.filename,
    content: await fs.promises.readFile(file.filename, 'utf8'),
  };
}

async function generateCodeFromComment(comment, code) {
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = `Apply the following comment to the given code snippet:\n\nComment: ${comment}\n\nCode:\n${code}\n\nModified Code:`;

  const response = await axios.post(apiUrl, {
    prompt,
    max_tokens: 100,
    n: 1,
    stop: null,
    temperature: 0.5,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`,
    },
  });

  return response.data.choices[0].text.trim();
}

async function commitChanges(filePath, newCode) {
  const { owner, repo, issue_number } = process.env;
  const branchName = `comment-update-${issue_number}`;

  // Create a new branch
  const { data: baseRef } = await octokit.git.getRef({ owner, repo, ref:'heads/main' });
  await octokit.git.createRef({ owner, repo, ref: `refs/heads/${branchName}`, sha: baseRef.object.sha });
  // Get the blob for the file
  const { data: blob } = await octokit.git.getBlob({ owner, repo, file_sha: filePath });

  // Update the file with the new code
  const newBlob = await octokit.git.createBlob({ owner, repo, content: newCode, encoding: 'utf-8' });
  const tree = await octokit.git.createTree({ owner, repo, tree: [{ path: filePath, mode: '100644', type: 'blob', sha: newBlob.data.sha, base_tree: blob.sha }] });
  const commit = await octokit.git.createCommit({ owner, repo, message: `Apply comment changes to ${filePath}`, tree: tree.data.sha, parents: [baseRef.object.sha] });

  // Update the branch to point to the new commit
  await octokit.git.updateRef({ owner, repo, ref: `heads/${branchName}`, sha: commit.data.sha });

  // Create a pull request
  await octokit.pulls.create({ owner, repo, title: `Apply comment changes to ${filePath}`, head: branchName, base: 'main' });
}

(async () => {
  try {
  const fileData = await getPullRequestFile();
  const comment = 'Add error handling to this function';
  const generatedCode = await generateCodeFromComment(comment, fileData.content);

  if (generatedCode) {
    await commitChanges(fileData.path, generatedCode);
    console.log('Changes committed and pull request created');
  } else {
    console.log('No code changes generated');
  }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();