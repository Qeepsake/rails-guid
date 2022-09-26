import { isExtractedRailsId } from './is-extracted-rails-id';
export function extractRailsId(gid, stripTimestamp = false) {
    // Checks if ID has already been extracted, if so, return it
    if (gid && isExtractedRailsId(gid))
        return gid;
    if (typeof gid === 'string' && (gid === null || gid === void 0 ? void 0 : gid.indexOf('/')) != -1) {
        const gidComponents = gid.split('/');
        let extractedId = gidComponents[gidComponents.length - 1];
        // Strips the timestamp (%2C2022-09-26+13%3A08%3A27+UTC)) from the ID
        if (stripTimestamp && (extractedId === null || extractedId === void 0 ? void 0 : extractedId.includes('%'))) {
            extractedId = extractedId.split('%')[0];
        }
        if (extractedId) {
            return extractedId;
        }
    }
    return null;
}
