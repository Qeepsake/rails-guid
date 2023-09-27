# Rails Guid for JavaScript
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Zero dependancy utility for creating and extracting rails GUIDs from a string.

[![NPM](https://img.shields.io/npm/v/@qeepsake/rails-guid.svg)](https://www.npmjs.com/package/@qeepsake/rails-guid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @qeepsake/rails-guid
```

## Usage

### Extracting Rails GUID

You can use `extractRailsId` to extract a Rails GUID from a string:

```js
import { extractRailsId } from '@qeepsake/rails-guid';

const guid = "gid://qeepsake-rails/Model/55587";
extractRailsId(guid) // -> 55587
```

### Creating Rails GUID

You can use the `createRailsId` to create Rails GUID:

```js
import { createRailsId } from '@qeepsake/rails-guid';

const id = 55587 || "55587";
createRailsId(id, "Model") // -> gid://qeepsake-rails/Model/55587
```

### Tetsing for Extracted Rails ID

```js
import { isExtractedRailsId } from '@qeepsake/rails-guid';

isExtractedRailsId("55587") // => true
isExtractedRailsId("gid://qeepsake-rails/Model/55587") // => false
```

### Testing for Rails Global ID

You can use `isRailsId`` to test if a string is a valid Rails Global ID:

```js
import { isRailsId } from '@qeepsake/rails-guid';

isRailsId("gid://qeepsake-rails/User/1")  // => true
isRailsId("gid://someotherapp/User/1")   // => true
isRailsId("User/1")                      // => false
```

This function tests if the string conforms to the general Rails gid structure: `gid://<ANY_APP_NAME>/<MODEL_NAME>/<ID>`.

## License

MIT © [lukebrandonfarrell](https://github.com/lukebrandonfarrell)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.lukebrandonfarrell.com"><img src="https://avatars3.githubusercontent.com/u/18139277?v=4" width="100px;" alt=""/><br /><sub><b>Luke Brandon Farrell</b></sub></a><br /><a href="#projectManagement-lukebrandonfarrell" title="Project Management">📆</a> <a href="https://github.com/qeepsake/rails-guid/commits?author=lukebrandonfarrell" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!