export function extractRailsId(gid) {
    if (typeof gid === 'string' && (gid === null || gid === void 0 ? void 0 : gid.indexOf('/')) != -1) {
        const gidComponents = gid.split('/');
        const extractedId = gidComponents[gidComponents.length - 1];
        if (extractedId) {
            return extractedId;
        }
    }
    return null;
}
