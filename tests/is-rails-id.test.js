const { isRailsId } = require('../src/is-rails-id'); // adjust the import path to where your function is located

describe('isRailsId Function', () => {
  test('Valid Rails Global ID with qeepsake-rails should return true', () => {
    expect(isRailsId('gid://qeepsake-rails/User/1')).toBe(true);
  });

  test('Valid Rails Global ID with someotherapp should return true', () => {
    expect(isRailsId('gid://someotherapp/User/1')).toBe(true);
  });

  test('Invalid Rails Global ID with missing app name should return false', () => {
    expect(isRailsId('gid:///User/1')).toBe(false);
  });

  test('Invalid Rails Global ID with missing model name should return false', () => {
    expect(isRailsId('gid://qeepsake-rails//1')).toBe(false);
  });

  test('Invalid Rails Global ID with missing ID should return false', () => {
    expect(isRailsId('gid://qeepsake-rails/User/')).toBe(false);
  });

  test('Invalid Rails Global ID with incorrect format should return false', () => {
    expect(isRailsId('User/1')).toBe(false);
  });
});