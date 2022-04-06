/**
 * Extract rails ID
 *
 * If the ID is passed in the format of gid://qeepsake-rails/JournalEntry/55587
 * then it will be returned 55587
 *
 * @param gid - gid://qeepsake-rails/Model/55587
 *
 * @returns 55587
 */
export function extractRailsId(gid: string): string
export function extractRailsId(gid?: string | null): string | null
export function extractRailsId(gid?: string | null): string | null {
  if (typeof gid === 'string' && gid?.indexOf('/') != -1) {
    const gidComponents = gid.split('/')
    const extractedId = gidComponents[gidComponents.length - 1]

    if (extractedId) {
      return extractedId
    }
  }

  return null
}
