let employeesNumber = 1000;
function Employee(name, department, level, imageURL) {
  this.id = this.generateID();
  this.name = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = this.calculateSalary();
}
Employee.prototype.generateID = function () {
  employeesNumber++;
  let generatedNumber = employeesNumber;
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
Employee.prototype.render = function () {
  const container = document.getElementById('employee-info');

  const cardEl = document.createElement('div');
  container.appendChild(cardEl);

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', this.imageURL);
  imgEl.width = "150";
  imgEl.height = "150";
  cardEl.appendChild(imgEl);

  const nameEl = document.createElement('h3');
  cardEl.appendChild(nameEl);
  nameEl.textContent = `Name: ${this.name}`;

  const idEl = document.createElement('h3');
  cardEl.appendChild(idEl);
  idEl.textContent = `ID: ${this.id}`;

  const deptEl = document.createElement('h3');
  cardEl.appendChild(deptEl);
  deptEl.textContent = `Department: ${this.department}`;

  const levelEl=document.createElement('h3');
  cardEl.appendChild(levelEl);
  levelEl.textContent= `Level: ${this.level}`;


  const salaryEl=document.createElement('h3');
  cardEl.appendChild(salaryEl);
  salaryEl.textContent=this.salary;
}


let empForm = document.getElementById("addEmployeeForm");
empForm.addEventListener('submit', addNewEmployeeHandler);
function addNewEmployeeHandler(event) {
  event.preventDefault();
  let empName = event.target.fname.value;
  let empDept = getSelectedDept();
  let empLevel = getSelectedLevel();
  let empImg = event.target.imgURL.value;

  function getSelectedDept() {
    const radios = document.getElementsByName('dept');
    let selectedDept;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedDept = radios[i].value;
        break;
      }
    }
    return selectedDept;
  }
  function getSelectedLevel() {
    const radios = document.getElementsByName('level');
    let selectedlevel;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedlevel = radios[i].value;
        break;
      }
    }
    return selectedlevel;
  }
  let newEmp=new Employee(empName,empDept,empLevel,empImg);
  newEmp.render();
}
