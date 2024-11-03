// // Local storage is the means
// localStorage.setItem("firstName", "Wike");
// //get value from local storage
// let myFirstName = localStorage.getItem("firstName")
// console.log(myFirstName);
// //delete key from local storage
// localStorage.removeItem("firstname")


// //JSON  javaScript Object notation


// //create a person object
// const person = {
//     firstName : "Arteta",
//     lastName :"Mikel",
//     age: 15,
// };

// //store person to localstorage
// localStorage.setItem("person", JSON.stringify(person));
// //get person from local storage
// let personString = localStorage.getItem("person");
// console.log(typeof JSON.parse(personString));

function addNewEmployee() {
    const fullName = document.getElementById("fullName").value.trim();
    const department = document.getElementById("department").value.trim();
    const employeeForm = document.getElementById("employeeForm")

    if (fullName & department) {
        const employee = {
            id: generateId(),
            fullName,
            department,
        }
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify("employees"));
        employeeForm.reset();
    }
}


saveButton.addEventListener("click", (event) => {
    
})

//generate id

function generateId() {
    return "_" + Math.random().toString(36).substring(2, 9);
}

// console.log(generate());

function displayEmployees() {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const 
}


