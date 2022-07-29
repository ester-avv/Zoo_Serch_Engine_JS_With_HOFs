const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  const employee = data.employees.filter((searchedEmployee) => {
    if (searchedEmployee.firstName === employeeName) {
      return searchedEmployee;
    } if (searchedEmployee.lastName === employeeName) {
      return searchedEmployee;
    }
    return searchedEmployee;
  });
  return employee[0];
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
