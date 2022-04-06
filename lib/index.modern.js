function extractRailsId(gid) {
  if (typeof gid === 'string' && (gid === null || gid === void 0 ? void 0 : gid.indexOf('/')) != -1) {
    var gidComponents = gid.split('/');
    var extractedId = gidComponents[gidComponents.length - 1];

    if (extractedId) {
      return extractedId;
    }
  }

  return null;
}

function createRailsId(id, model) {
  return "gid://qeepsake-rails/" + model + "/" + id;
}

export { createRailsId, extractRailsId };
//# sourceMappingURL=index.modern.js.map
