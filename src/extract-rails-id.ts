/**
 * Extract rails ID
 *
 * If the ID is passed in the format of gid://qeepsake-rails/JournalEntry/55587
 * then it will be returned 55587
 *
 * @param gid - gid://qeepsake-rails/Model/55587
 * @param stripTimestamp - whether to strip the timestamp from the ID (i.e. %2C2022-09-26+13%3A08%3A27+UTC)
 *
 * @returns 55587
 */
export function extractRailsId(gid: string, stripTimestamp?: boolean): string
export function extractRailsId(
  gid?: string | null,
  stripTimestamp?: boolean,
): string | null
export function extractRailsId(
  gid?: string | null,
  stripTimestamp = false,
): string | null {
  if (typeof gid === 'string' && gid?.indexOf('/') != -1) {
    const gidComponents = gid.split('/')
    let extractedId = gidComponents[gidComponents.length - 1]

    // Strips the timestamp (%2C2022-09-26+13%3A08%3A27+UTC)) from the ID
    if (stripTimestamp && extractedId?.includes('%')) {
      extractedId = extractedId.split('%')[0]
    }

    if (extractedId) {
      return extractedId
    }
  }

  return null
}
