
let nextRecordId = 0;

function addLeadingZeroes(inputNum, digitCount){
    let outputString = ""

    for (let index = digitCount - 1; index >= 0; index--) {
        let check = Math.pow(10, index);

        if (inputNum / check < 1) {
            outputString += "0"
        }
        else {
            outputString += inputNum
            break;
        }
    }

    return outputString
}

function updateUser(){

}

function newUser(params) {
    const table = document.getElementById("table-body");
    const firstName = document.getElementById("record-firstname").value
    const lastName = document.getElementById("record-lastname").value
    const age = document.getElementById("record-age").value
    const gender = document.getElementById("record-gender").value
    const vehicleNo = document.getElementById("record-vehicle-number").value
    const vehicleType = document.getElementById("record-vehicle-type").value
    const id = addLeadingZeroes(nextRecordId, 3)

    table.innerHTML+= `
        <tr id="${nextRecordId}">
            <td>${id}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${vehicleNo}</td>
            <td>${vehicleType}</td>
            <td>
                <button id="update-button">Update</button>
                <button id="delete-button">Delete</button>
            </td>
        </tr>
    `

    nextRecordId++
}

function deleteUser(params) {
    
}

const newButton = document.getElementById("new-button")
newButton.addEventListener("click", newUser)

console.log(addLeadingZeroes(235, 6));