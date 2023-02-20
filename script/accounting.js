let departmentsData = {};
let getEmployees = localStorage.getItem('allEmployees');
getEmployees = JSON.parse(getEmployees);
getEmployees.forEach(element => {
    if (!departmentsData[element.department])
        departmentsData[element.department] = { empCounter: 1, salaries: element.salary };
    else {
        departmentsData[element.department].salaries += element.salary;
        departmentsData[element.department].empCounter++;
    }
});
render();
// ----------- Functions -----------
function render() {
    const container = document.getElementById('department-info');
    container.innerHTML = '';
    const tableHeader = document.createElement('tr');
    container.appendChild(tableHeader);
    const tc01 = document.createElement('td');
    tableHeader.appendChild(tc01);
    tc01.textContent = "Department";
    const tc02 = document.createElement('td');
    tableHeader.appendChild(tc02);
    tc02.textContent = "# of Employess";
    const tc03 = document.createElement('td');
    tableHeader.appendChild(tc03);
    tc03.textContent = "Total Salary";
    const tc04 = document.createElement('td');
    tableHeader.appendChild(tc04);
    tc04.textContent = "Average";
    for (const department in departmentsData) {
        const tr1 = document.createElement('tr');
        container.appendChild(tr1);
        const tc11 = document.createElement('td');
        tr1.appendChild(tc11);
        tc11.textContent = `${department}`;
        const tc12 = document.createElement('td');
        tr1.appendChild(tc12);
        tc12.textContent = `${departmentsData[department].empCounter}`;
        const tc13 = document.createElement('td');
        tr1.appendChild(tc13);
        tc13.textContent = `${departmentsData[department].salaries}`;
        const tc14 = document.createElement('td');
        tr1.appendChild(tc14);
        let avgSal=Math.round(departmentsData[department].salaries/departmentsData[department].empCounter);
        tc14.textContent = avgSal;
    }
    const trtotal = document.createElement('tr');
    container.appendChild(trtotal);
    const tcTotalDept = document.createElement('td');
    trtotal.appendChild(tcTotalDept);
    tcTotalDept.textContent = "Total";
    const tcTotalEmp = document.createElement('td');
    trtotal.appendChild(tcTotalEmp);
    tcTotalEmp.textContent = `${calculateTotalEmployees()}`;
    const tcTotalSalaries = document.createElement('td');
    trtotal.appendChild(tcTotalSalaries);
    tcTotalSalaries.textContent = `${calculateTotalSalary()}`;
    const tcTotalAverage = document.createElement('td');
    trtotal.appendChild(tcTotalAverage);
    tcTotalAverage.textContent = `${calculateTotalAverage()}`;

    
    }
    function calculateTotalEmployees()
    {
        let totalEmployees=0;
        for (const department in departmentsData) {
           totalEmployees+= departmentsData[department].empCounter;                
            }
            return totalEmployees;
        }
    function calculateTotalSalary()
    {        let totalSalaries=0;
        for (const department in departmentsData) {
           totalSalaries+= departmentsData[department].salaries;                
            }
            return totalSalaries;
        }

    function calculateTotalAverage()
    {
        let totalAverage=Math.round(calculateTotalSalary()/calculateTotalEmployees());
        return totalAverage;
    }






