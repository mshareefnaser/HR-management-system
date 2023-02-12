function Employee(id, name, department, level, imageURL) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.calculateSalary();
  }
  
  Employee.prototype.calculateSalary = function() {
    let min, max;
    switch(this.level) {
      case 'Senior':
        min= 1500;
        max= 2000;
        break;
      case 'Mid-Senior':
        min= 1000;
        max= 1500;
        break;
      case 'Junior':
        min= 500;
        max= 1000;
        break;
    }
    let randomSalary=Math.random()*(max-min)+min;
    let netSalary=Math.round(randomSalary*(1-0.075));
    return netSalary;
  }
  
  Employee.prototype.render=function() {
    return `<h4>Employee: ${this.name} &nbsp;&nbsp;&nbsp; Salary: $${this.salary}</h4>`;
  }
const e1=new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
const e2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
const e3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
const e4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
const e5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
const e6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
const e7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

document.getElementById('employee-info').innerHTML = e1.render();
document.getElementById('employee-info').innerHTML += e2.render();
document.getElementById('employee-info').innerHTML += e3.render();
document.getElementById('employee-info').innerHTML += e4.render();
document.getElementById('employee-info').innerHTML += e5.render();
document.getElementById('employee-info').innerHTML += e6.render();
document.getElementById('employee-info').innerHTML += e7.render();  