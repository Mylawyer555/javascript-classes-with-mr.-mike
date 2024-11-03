document.addEventListener('DOMContentLoaded', function()  {
    const offenceData = JSON.parse(localStorage.getItem('clientRecord')) || [];
    const Tabledata = document.querySelector('#reports tbody');


    //loop through
    offenceData.forEach(offenceKey => {
        
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = offenceKey.clientName;
        row.appendChild(nameCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = offenceKey.clientGender;
        row.appendChild(genderCell);

        const plateNo_Cell = document.createElement('td');
        plateNo_Cell.textContent = offenceKey.carPlate;
        row.appendChild(plateNo_Cell);

        const contactCell = document.createElement('td');
        contactCell.textContent = offenceKey.contact;
        row.appendChild(contactCell);

        const vehicleTypeCell = document.createElement('td');
        vehicleTypeCell.textContent = offenceKey.vehicle;
        row.appendChild(vehicleTypeCell);

        const offenceCell = document.createElement('td');
        offenceCell.textContent = offenceKey.clientOffense;
        row.appendChild(offenceCell);

        const datetimeCell = document.createElement('td');
        datetimeCell.textContent = offenceKey.date;
        row.appendChild(datetimeCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = offenceKey.location;
        row.appendChild(locationCell);

        const fineCell = document.createElement('td');
        fineCell.textContent = offenceKey.clientFine;
        row.appendChild(fineCell);

        Tabledata.appendChild(row)
    });
})