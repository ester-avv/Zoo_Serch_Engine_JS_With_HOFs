const data = require('../data/zoo_data');

function isManager(id) {
  /*  const manager = data.employees.find((possibleManager) => {
    possibleManager.id === id;
    console.log(possibleManager);
    return possibleManager;
  });
  console.log(manager);
  return manager; */

}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

/* isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'); */

module.exports = { isManager, getRelatedEmployees };
