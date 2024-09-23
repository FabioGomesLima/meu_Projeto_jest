const soma = require('../index');

test('adiciona 1 + 2 para ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});
