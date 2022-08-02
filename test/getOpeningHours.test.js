const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se quando é inserido Monday, a função retorna "The zoo is closed"', () => {
    const zooClosedWarning = 'The zoo is closed';
    expect(getOpeningHours('monday', '01:00-PM')).toEqual(zooClosedWarning);
  });
  it('Verifica se quando é inserido Tuesday e um horário dentro do horário de funcionamento, a função retorna "The zoo is open"', () => {
    const zooOpen = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '01:00-PM')).toEqual(zooOpen);
  });
  it('Verifica se quando é inserido um horário fora do horário de funcionamento, a função retorna "The zoo is closed"', () => {
    const zooClosedWarning = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(zooClosedWarning);
  });
  it('Verifica se quando é inserido um dia padrão esperado (ex: Thu), a função retorna uma exceção "The day must be valid. Example: Monday"', () => {
    const errorWarning = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow(errorWarning);
  });
  it('Verifica se quando é inserido como complemento de hora uma string inválida (ex: 09:00-ZM), a função retorna uma exceção', () => {
    const errorWarning = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(errorWarning);
  });
  it('Verifica se quando é inserido argumentos com hora inválida (ex: C9:00-AM), a função retorna uma exceção "The hour should represent a number"', () => {
    const errorWarning = 'The hour should represent a number';
    expect(() => getOpeningHours('Sunday', 'C9:00-AM')).toThrow(errorWarning);
  });
  it('Verifica se quando é inserido argumentos com minuto inválido (ex: 09:o0-AM), a função retorna uma exceção "The minutes should represent a number"', () => {
    const errorWarning = 'The minutes should represent a number';
    expect(() => getOpeningHours('Saturday', '09:o0-AM')).toThrow(errorWarning);
  });
  it('Verifica se quando é inserido horário fora do padrão 12 horas(AM-PM), a função retorna uma exceção "The hour must be between 0 and 12"', () => {
    const errorWarning = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Thursday', '13:00-PM')).toThrow(errorWarning);
  });
  it('Verifica se quando é inserido minutos com número superior a 59, a função retorna uma exceção "The minutes must be between 0 and 59"', () => {
    const errorWarning = 'he minutes must be between 0 and 59';
    expect(() => getOpeningHours('Wednesday', '02:60-PM')).toThrow(errorWarning);
  });
});
