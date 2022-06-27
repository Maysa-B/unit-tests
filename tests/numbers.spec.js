/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { TestScheduler } = require('jest');
const numbers = require('../src/numbers');

/*
   A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  test('função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  })

  test('função recebe [1, 2, string, 4, 5] e retorna false', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  })

  test('função recebe [1, a, 3]', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  })

  test('função recebe uma string vazia e retorna false', () => {
    expect(numbers['']).toBeFalsy();
  })
});
