/**
 * Checks to see if the given string is a valid extracted Rails ID
 * i.e. 55587 and not gid://qeepsake-rails/JournalEntry/55587
 *
 * @param id - rails ID
 * @returns if ID is extracted rails ID
 */
export declare function isExtractedRailsId(id: string): boolean;
