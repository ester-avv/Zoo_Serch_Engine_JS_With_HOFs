const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!", quando o id inserido não for de uma pessoa colaboradora genrente', () => {
         expect(getOpeningHours(12, '1 am')).toThrow(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
    });

   /*  it('dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!", quando o id inserido não for de uma pessoa colaboradora genrente', () => {
        const hoursOpen = {
            Tuesday: { open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thursday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: { open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 0, close: 0 }
        }
    } */
});
