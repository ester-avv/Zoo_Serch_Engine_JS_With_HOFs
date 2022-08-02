const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const worker = data.employees.find((informedWorker) => informedWorker.id === id);
  const responsibleForAnimal = worker.responsibleFor;
  const findAnimal = data.species.find((animal) => animal.id === responsibleForAnimal[0]);
  const foundAnimalResidents = findAnimal.residents;
  const oldestAnimal = foundAnimalResidents.reduce((acc, current) => {
    if (acc.age > current.age) {
      return acc;
    }
    return current;
  });
  const arrayOldestAnimal = Object.values(oldestAnimal);
  return arrayOldestAnimal;
}

/* console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); */

module.exports = getOldestFromFirstSpecies;
