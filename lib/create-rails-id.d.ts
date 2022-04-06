/**
 * Creates a rails id
 *
 * If the ID is passed in the format of 55587, then it will be returned
 * gid://qeepsake-rails/JournalEntry/55587
 *
 * @param id - 55587
 * @param model - JournalEntry
 *
 * @returns gid://qeepsake-rails/Model/55587
 */
export declare function createRailsId(id: number | string, model: string): string;
