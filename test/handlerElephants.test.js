const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna indefinida quando não recebe parâmetros', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se a função retorna mensagem de erro quando não recebe uma string como parâmetro', () => {
    const mistakeMessage = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(5)).toBe(mistakeMessage);
  });

  it('Verifica se a função retorna os valores das chaves passadas por parâmetro', () => {
    const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    const elephantAvailability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const elephantResidents = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('availability')).toEqual(elephantAvailability);
    expect(handlerElephants('id')).toEqual(elephantsId);
    expect(handlerElephants('residents')).toEqual(elephantResidents);
  });

  it('Verifica se a função retorna os pedidos por parâmetro a respeito das informações adicionais', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Verifica se o nome Jefferson está entre os elefantes que moram neste zoológico', () => {
    expect(handlerElephants('names').includes('Jefferson')).toBeTruthy();
  });
});
