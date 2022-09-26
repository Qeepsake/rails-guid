const { isExtractedRailsId } = require('../src/is-extracted-rails-id');

test('Test non-extracted Rails ID equals false', () => {
  expect(isExtractedRailsId('gid://qeepsake-rails/MyModel/12345')).toBe(false);
});

test('Test extracted Rails ID equals true', () => {
    expect(isExtractedRailsId('12345')).toBe(true);
});