const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((worker) => worker.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const workersBelowManager = data.employees.filter((worker)=> worker.managers.includes(managerId));

  const namesOfWorkers = workersBelowManager.map((workers) => workers.firstName + ' ' + workers.lastName);

  return namesOfWorkers;
}

isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
