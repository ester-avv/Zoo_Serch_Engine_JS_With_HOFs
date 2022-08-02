const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants) {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const findChildren = entrants.filter((person) => person.age < 18);
  const findAdult = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const findSenior = entrants.filter((person) => person.age >= 50);
  const myEntrants = { adult: findAdult.length,
    child: findChildren.length,
    senior: findSenior.length };
  return myEntrants;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const myEntrants = countEntrants(entrants);
  const adultAmount = data.prices.adult * myEntrants.adult;
  const childAmount = data.prices.child * myEntrants.child;
  const seniorAmount = data.prices.senior * myEntrants.senior;
  return adultAmount + childAmount + seniorAmount;
}

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

/* console.log(countEntrants({})); */

module.exports = { calculateEntry, countEntrants };
