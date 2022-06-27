const { TestScheduler } = require('jest');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // Teste se productDetails é uma função.
  test('Verifica de productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  })
  // Teste se o retorno da função é um array.
  test('Verifica se o retorno da função é um array', () => {
    expect(typeof productDetails('qualquer','um')).toBe('object');
  })
  // Teste se o array retornado pela função contém dois itens dentro.
  test('Verificar se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('qualquer','um')).toHaveLength(2);
  })
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  test('Confere se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('qualquer','um')[0]).toBe('object');
    expect(typeof productDetails('qualquer','um')[1]).toBe('object');
  })
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  test('Analisa se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('qualquer','um')[0]).not.toEqual(productDetails('qualquer','um')[1]);
    expect(productDetails('qualquer','um')[1]).not.toEqual(productDetails('qualquer','um')[0]);
  })
  // Teste se os dois productIds terminam com 123.
  test('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('qualquer','um')[0].details.productId).toMatch('123');
    expect(productDetails('qualquer','um')[1].details.productId).toMatch('123');
  })
});
