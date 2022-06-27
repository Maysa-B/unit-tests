const { createMenu, objRetornado } = require('../src/restaurant');

/*
   Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.
  test('Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu, a qual tem como valor uma função', () => {
    expect(typeof createMenu().fetchMenu).toBe('function');
  });

  // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
  test('Verifica se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente food e drink, considerando que a função createMenu foi chamada com o objeto: { food: {}, drink: {} }', () => {
    expect(Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu())).toEqual(['food', 'drink']);
  });
  // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
  test('Verifica se o menu passado pra função createMenu é identico ao menu recuperado pela função objetoRetornado.fetchMenu()', () => {
    expect({ food: {}, drink: {} }).toEqual(createMenu({ food: {}, drink: {} }).fetchMenu())
  })
  // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
  test('Verifica se objetoRetornado.consumption, após a criação do menu, retorna um array vazio', () => {
    expect(createMenu({ food: {}, drink: {} }).consumption).toEqual([]);
  })
  // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
  test('Verifica se ao chamar uma função associada à chave order no objeto retornado, passando uma string como parâmetro (como objetoRetornado.order(coxinha)), tal string é adicionada ao array retornado em objetoRetornado.consumption', () => {
    const objRetornado = createMenu();
    objRetornado.order('coxinha', objRetornado.consumption);
    expect(objRetornado.consumption).toEqual(['coxinha']);
  });
  // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
  test('Verifica se ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos', () => {
    const objRetornado = createMenu();
    objRetornado.order('coxinha', objRetornado.consumption);
    objRetornado.order('agua', objRetornado.consumption);
    objRetornado.order('sopa', objRetornado.consumption);
    objRetornado.order('sashimi', objRetornado.consumption);
    expect(objRetornado.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);
  });
  // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
  test('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption', () => {
    const objRetornado = createMenu();
    objRetornado.order('coxinha', objRetornado.consumption);
    objRetornado.order('agua', objRetornado.consumption);
    objRetornado.order('coxinha', objRetornado.consumption);
    expect(objRetornado.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  });
  // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
  test('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    const objRetornado = createMenu({ food: { coxinha: 5.00, pastel: 4.50, assado: 6.00, bala: 2.00, chocolate: 3.50 }, drink: { agua: 4.00, refri: 4.50, nescau: 3.50, café: 3.50 } });
    objRetornado.fetchMenu = createMenu({ food: { coxinha: 5.00, pastel: 4.50, assado: 6.00, bala: 2.00, chocolate: 3.50 }, drink: { agua: 4.00, refri: 4.50, nescau: 3.50, café: 3.50 } }).fetchMenu();
    objRetornado.order('coxinha', objRetornado.consumption);
    objRetornado.order('agua', objRetornado.consumption);
    objRetornado.order('coxinha', objRetornado.consumption);
    expect(objRetornado.pay(objRetornado.consumption, objRetornado.fetchMenu.food, objRetornado.fetchMenu.drink)).toMatch('O valor total é R$ 14.');
  });
});
