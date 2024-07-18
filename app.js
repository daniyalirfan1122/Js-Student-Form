

let studentData = []


function addStudent(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let course = document.getElementById('course').value


    if (name && age && gender && course ) {
        let rollNumber = studentData.length +1;

        let student = {
            rollNumber : rollNumber,
            name : name,
            age : age,
            gender : gender,
            course : course,
        };
        studentData.push(student);

        localStorage.setItem('studentData', JSON.stringify(studentData) );

        displayStudents();

        document.getElementById('studentForm').reset();

        
    }else{
        alert('Please fill out field')
    }
}

function  displayStudents(){
    let tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML='';

    studentData.forEach(student =>{
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = student.rollNumber;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.age;
        row.insertCell(3).textContent = student.gender;
        row.insertCell(4).textContent = student.course;
    })
}
window.onload = function() {
    let storedData = localStorage.getItem('studentData');
    if (storedData) {
        studentData = JSON.parse(storedData);
        displayStudents(); // Display existing data on page load
    }
};

