function isExtractedRailsId(id) {
  return !(id !== null && id !== void 0 && id.startsWith('gid://'));
}

function extractRailsId(gid, stripTimestamp) {
  if (stripTimestamp === void 0) {
    stripTimestamp = false;
  }

  if (gid && isExtractedRailsId(gid)) {
    return gid;
  }

  if (typeof gid === 'string' && (gid === null || gid === void 0 ? void 0 : gid.indexOf('/')) != -1) {
    var _extractedId;

    var gidComponents = gid.split('/');
    var extractedId = gidComponents[gidComponents.length - 1];

    if (stripTimestamp && (_extractedId = extractedId) !== null && _extractedId !== void 0 && _extractedId.includes('%')) {
      extractedId = extractedId.split('%')[0];
    }

    if (extractedId) {
      return extractedId;
    }
  }

  return null;
}

function createRailsId(id, model) {
  return "gid://qeepsake-rails/" + model + "/" + id;
}

export { createRailsId, extractRailsId, isExtractedRailsId };
//# sourceMappingURL=index.modern.js.map
