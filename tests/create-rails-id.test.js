
const { createRailsId } = require('../src/create-rails-id');

test('Create a Rails GUID from a string', () => {
  expect(createRailsId('12345', 'MyModel')).toBe("gid://qeepsake-rails/MyModel/12345");
});

test('Create a Rails GUID from a number', () => {
    expect(createRailsId(12345, 'MyModel')).toBe("gid://qeepsake-rails/MyModel/12345");
});