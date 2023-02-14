let employeesNumber=1000;
function Employee(name, department, level, imageURL) {
  this.id = this.generateID();
  this.name = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = this.calculateSalary();
}
Employee.prototype.generateID = function (){
  employeesNumber++;
  let generatedNumber=employeesNumber;
  return generatedNumber;
}

Employee.prototype.calculateSalary = function () {
  let min, max;
  switch (this.level) {
    case 'Senior':
      min = 1500;
      max = 2000;
      break;
    case 'Mid-Senior':
      min = 1000;
      max = 1500;
      break;
    case 'Junior':
      min = 500;
      max = 1000;
      break;
  }
  let randomSalary = Math.random() * (max - min) + min;
  let netSalary = Math.round(randomSalary * (1 - 0.075));
  return netSalary;
}
// #lab07
// Employee.prototype.render = function () {
//   return `<h4>ID: ${this.id} &nbsp;&nbsp;&nbsp; Employee: ${this.name} &nbsp;&nbsp;&nbsp; Salary: $${this.salary}</h4>`;
// }
// const e1 = new Employee('Ghazi Samer', 'Administration', 'Senior');
// const e2 = new Employee('Lana Ali', 'Finance', 'Senior');
// const e3 = new Employee('Tamara Ayoub', 'Marketing', 'Senior');
// const e4 = new Employee('Safi Walid', 'Administration', 'Mid-Senior');
// const e5 = new Employee('Omar Zaid', 'Development', 'Senior');
// const e6 = new Employee('Rana Saleh', 'Development', 'Junior');
// const e7 = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior');

// document.getElementById('employee-info').innerHTML = e1.render();
// document.getElementById('employee-info').innerHTML += e2.render();
// document.getElementById('employee-info').innerHTML += e3.render();
// document.getElementById('employee-info').innerHTML += e4.render();
// document.getElementById('employee-info').innerHTML += e5.render();
// document.getElementById('employee-info').innerHTML += e6.render();
// document.getElementById('employee-info').innerHTML += e7.render();  
let empForm=document.getElementById("addEmployeeForm");
empForm.addEventListener("Add", addNewEmployeeHandler);
function addNewEmployeeHandler (event)
{
  let empName=event.target.name.value;
}
