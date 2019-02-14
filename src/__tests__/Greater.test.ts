import { Greeting } from '../index';
test('My Greeter', () => {
  expect(Greeting('42')).toBe('Hello 42');
});
