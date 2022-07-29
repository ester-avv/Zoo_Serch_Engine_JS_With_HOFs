const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
 const chosenAnimal = data.species.find((myAnimal) => myAnimal.name === animal);
 const animalsOlderThan = chosenAnimal.residents.every((sameSpAnimal) => sameSpAnimal.age >= age);
 return animalsOlderThan; 
}

console.log(getAnimalsOlderThan('tigers', 10));

module.exports = getAnimalsOlderThan;
