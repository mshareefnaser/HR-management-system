let departmentsData = [];
let getEmployees = localStorage.getItem('allEmployees');
getEmployees = JSON.parse(getEmployees);
getEmployees.forEach(element => {
    if (!departmentsData[element.department])
        departmentsData[element.department] = { empCounter: 1, salaries: getEmployees.salary };
    else {
        departmentsData[elemente.department].salaries += getEmployees.salary;
        departmentsData[element.department].empCounter++;
    }
});
function render() {
    const container = document.getElementById('department-info');
    container.innerHTML = '';
    let avgSal=0;
    const tableHeader = document.createElement('tr');
    container.appendChild(tableHeader);
    const tc01 = document.createElement(td);
    tableHeader.appendChild(tc01);
    tc01.textContent = "Department";
    const tc02 = document.createElement(td);
    tableHeader.appendChild(tc02);
    tc01.textContent = "# of Employess";
    const tc03 = document.createElement(td);
    tableHeader.appendChild(tc03);
    tc01.textContent = "Total Salary";
    const tc04 = document.createElement(td);
    tableHeader.appendChild(tc04);
    tc01.textContent = "Average";
    for (const department in departmentsData) {
        const tr1 = document.createElement('tr');
        container.appendChild(tr1);
        const tc11 = document.createElement(td);
        tr1.appendChild(tc11);
        tc01.textContent = `${department}`;
        const tc12 = document.createElement(td);
        tr1.appendChild(tc12);
        tc01.textContent = `${departmentsData.department[empCounter]}`;
        const tc13 = document.createElement(td);
        tr1.appendChild(tc13);
        tc01.textContent = `${departmentsData.department[salaries]}`;;
        const tc14 = document.createElement(td);
        tr1.appendChild(tc14);
        avgSal=Math.round(departmentsData.department[salaries]/departmentsData.department[empCounter]);
        tc01.textContent = avgSal;
    }
    }






