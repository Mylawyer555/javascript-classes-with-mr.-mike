

const myOwn = document.getElementById('theOffence').addEventListener('submit', (event) => {
    event.preventDefault();

    //Getting values from input and saving them to a variable
    const name = document.getElementById('Fullname').value;
    const gender = document.getElementById('Gender').value;
    const plateNo = document.getElementById('PlateNumber').value;
    const contact = document.getElementById('Contact').value;
    const vehicleType = document.getElementById('Veh-type').value;
    const offense = document.getElementById('Offense-commit').value;
    const date_time = document.getElementById('DT').value;
    const location = document.getElementById('Location').value;
    const fine = document.getElementById('Fine').value;

    const obj = {
        clientName: name,
        clientGender: gender,
        carPlate: plateNo,
        contact,
        vehicle: vehicleType,
        clientOffense: offense,
        date: date_time,
        location,
        clientFine: fine,
    }

    //store on local storage
    const clientRecord = JSON.parse(localStorage.getItem('clientRecord')) || [];
    clientRecord.push(obj);

    localStorage.setItem("clientRecord", JSON.stringify(clientRecord));

    //form reset
    document.getElementById('theOffence').reset();

})