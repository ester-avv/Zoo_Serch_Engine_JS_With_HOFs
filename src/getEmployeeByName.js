const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = data.employees.find((searchedEmployee) =>
    searchedEmployee.firstName === employeeName);
  const employeeLastName = data.employees.find((searchedEmployee) =>
    searchedEmployee.lastName === employeeName);

  if (!employeeName) {
    return {};
  } if (!employee) {
    return employeeLastName;
  } if (!employeeLastName) {
    return employee;
  }
}
console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
