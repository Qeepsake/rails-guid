const { extractRailsId } = require('../src/extract-rails-id');

test('Extract a Rails GUID from a string', () => {
  expect(extractRailsId('gid://qeepsake-rails/MyModel/12345')).toBe("12345");
});

test('Extract a Rails GUID is of wrong type', () => {
    expect(extractRailsId({ id: 'gid://qeepsake-rails/MyModel/12345' })).toBe(null);
});

test('Extract a Rails GUID when a string is NOT a Rails GUID', () => {
    expect(extractRailsId('The quick brown fox jumps over the lazy dog')).toBe(null);
});

test('Extract a Rails GUID with a timestamp', () => {
  expect(extractRailsId('gid://qeepsake-rails/MyModel/12345%2C2022-09-26+13%3A08%3A27+UTC')).toBe('12345%2C2022-09-26+13%3A08%3A27+UTC');
});

test('Extract a Rails GUID and strip the timestamp', () => {
  expect(extractRailsId('gid://qeepsake-rails/MyModel/12345%2C2022-09-26+13%3A08%3A27+UTC', true)).toBe('12345');
});