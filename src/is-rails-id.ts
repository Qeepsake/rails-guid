/**
 * Checks if a given string is a valid Rails Global ID (gid).
 *
 * The function validates that the string conforms to the general Rails gid structure:
 * gid://<ANY_APP_NAME>/<MODEL_NAME>/<ID>
 *
 * @param str - The string to test.
 * @returns True if the string is a valid Rails gid, false otherwise.
 *
 * @example
 * isRailsId("gid://qeepsake-rails/User/1")  // returns true
 * isRailsId("gid://someotherapp/User/1")   // returns true
 * isRailsId("User/1")                      // returns false
 */
export function isRailsId(str: string): boolean {
  const pattern = /^gid:\/\/[^\/]+\/[a-zA-Z]+\/\d+$/
  return pattern.test(str)
}
