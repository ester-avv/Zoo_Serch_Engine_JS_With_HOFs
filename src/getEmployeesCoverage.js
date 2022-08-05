const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(id) {
  const workerId = data.employees.find((personWorker) => personWorker.id === id);

  const arraySpecies = workerId.responsibleFor;

  const mySpecies = arraySpecies
    .map((idSpecies) => data.species
      .find((specie) => specie.id === idSpecies));
  return mySpecies;
}

function speciesName(id) {
  return getSpecies(id).map((element) => element.name);
}

function speciesLocation(id) {
  return getSpecies(id).map((element) => element.location);
}

function fullName(id) {
  const employee = employees.find((person) => person.id === id);
  return `${employee.firstName} ${employee.lastName}`;
}

function createWorkerInfo(id) {
  const newInfo = {
    id,
    fullName: fullName(id),
    species: speciesName(id),
    locations: speciesLocation(id),
  };
  return newInfo;
}

const worker = (person) => data.employees.find((el) =>
  el.id === person.id || el.firstName === person.name || el.lastName === person.name);

function getEmployeesCoverage(person) {
  if (!person) {
    const allWorkers = data.employees.map((element) => element.id);
    return allWorkers.map((id) => createWorkerInfo(id));
  } if (worker(person) === undefined) {
    throw new Error('Informações inválidas');
  }
  const workerId = worker(person);
  return createWorkerInfo(workerId.id);
}

module.exports = getEmployeesCoverage;
