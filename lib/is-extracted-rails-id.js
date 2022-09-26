/**
 * Checks to see if the given string is a valid extracted Rails ID
 * i.e. 55587 and not gid://qeepsake-rails/JournalEntry/55587
 *
 * @param id - rails ID
 * @returns if ID is extracted rails ID
 */
export function isExtractedRailsId(id) {
    if (typeof id === 'string') {
        // Extracted IDs should NOT start with gid:// with no empty spaces
        return !id.startsWith('gid://') && id.indexOf(' ') == -1;
    }
    return false;
}
