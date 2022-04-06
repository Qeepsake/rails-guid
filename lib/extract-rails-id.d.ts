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
export declare function extractRailsId(gid: string): string;
export declare function extractRailsId(gid?: string | null): string | null;
