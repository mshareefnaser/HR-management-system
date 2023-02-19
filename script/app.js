let allEmployees=[];
let allemployeesNumber = 1000;
function Employee(name, department, level, imageURL) {
  this.id = this.generateID();
  this.name = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = this.calculateSalary();
  allEmployees.push(this);
}


let empForm = document.getElementById("addEmployeeForm");
empForm.addEventListener('submit', addNewEmployeeHandler);


function addNewEmployeeHandler(event) {
  event.preventDefault();
  let empName = event.target.fname.value;
  let empDept = getSelectedDept();
  let empLevel = getSelectedLevel();
  let empImg = event.target.imgURL.value;

  let newEmp=new Employee(empName,empDept,empLevel,empImg);
  let arrToJson=JSON.stringify(allEmployees);
  let setEmployees=localStorage.setItem('allEmployees',arrToJson);

  render();
}
render();

// -------- Functions Below ------------

function render() {
  // localStorage.clear();
  getData();
  const container = document.getElementById('employee-info');
  container.innerHTML='';
  if(allEmployees == null)
  {
    allEmployees = [];
  } 

  for (let i=0; i<allEmployees.length; i++)
  {

    const cardEl = document.createElement('div');
    container.appendChild(cardEl);
  
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', allEmployees[i].imageURL);
    imgEl.width = "150";
    imgEl.height = "150";
    cardEl.appendChild(imgEl);
  
    const nameEl = document.createElement('h3');
    cardEl.appendChild(nameEl);
    nameEl.textContent = `Name: ${allEmployees[i].name}`;
  
    const idEl = document.createElement('h3');
    cardEl.appendChild(idEl);
    idEl.textContent = `ID: ${allEmployees[i].id}`;
  
    const deptEl = document.createElement('h3');
    cardEl.appendChild(deptEl);
    deptEl.textContent = `Department: ${allEmployees[i].department}`;
  
    const levelEl=document.createElement('h3');
    cardEl.appendChild(levelEl);
    levelEl.textContent= `Level: ${allEmployees[i].level}`;
  
  
    const salaryEl=document.createElement('h3');
    cardEl.appendChild(salaryEl);
    salaryEl.textContent=allEmployees[i].salary;
  
  }
}

Employee.prototype.generateID = function () {
  let generatedNumber = allemployeesNumber+allEmployees.length+1;
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
function getData()
{
  let getEmployees=localStorage.getItem('allEmployees');
  allEmployees=JSON.parse(getEmployees);
  //return allEmployees;
}

