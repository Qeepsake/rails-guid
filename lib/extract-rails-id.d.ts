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
export declare function extractRailsId(gid: string, stripTimestamp?: boolean): string;
export declare function extractRailsId(gid?: string | null, stripTimestamp?: boolean): string | null;
