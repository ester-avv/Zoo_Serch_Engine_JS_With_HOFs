const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = data.species.reduce((acc, currentSpecie) => {
      acc[currentSpecie.name] = currentSpecie.residents.length;
      return acc;
    }, {});
    return allAnimals;
  } if (Object.keys(animal).length === 1) {
    const searchedAnimal = species.find((selectedSpecie) =>
      selectedSpecie.name === animal.specie);
    return searchedAnimal.residents.length;
  } if (Object.keys(animal).length === 2) {
    const searchedAnimal = species.find((selectedSpecie) =>
      selectedSpecie.name === animal.specie);
    const residentsAnimals = searchedAnimal.residents.filter((resident) =>
      resident.sex === animal.sex);
    return residentsAnimals.length;
  }
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
