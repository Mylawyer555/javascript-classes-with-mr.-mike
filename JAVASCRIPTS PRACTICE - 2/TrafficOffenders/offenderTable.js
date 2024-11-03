document.addEventListener("DOMContentLoaded", function () {
    const offenders = JSON.parse(localStorage.getItem("offenders")) || [];
    const offenceTable = document.querySelector("#offenderTable tbody");

    //Loop over the data in the localstorage. so, for very data there create a new table row.
    offenders.forEach(offender => {
        //create a variable that will store new rows
        const row = document.createElement("tr")
        //creating a variable that will store a cell
        const nameCell = document.createElement("td");
        nameCell.textContent = offender.name;
        row.appendChild(nameCell);

        const genCell = document.createElement("td");
        genCell.textContent = offender.gender;
        row.appendChild(genCell);

        const contactCell = document.createElement("td");
        contactCell.textContent = offender.offence;
        row.appendChild(contactCell);

        const TdCell = document.createElement("td");
        TdCell.textContent = offender.date;
        row.appendChild(TdCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = offender.location;
        row.appendChild(locationCell);

        const fineCell = document.createElement("td");
        fineCell.textContent = offender.fine;
        row.appendChild(fineCell);

    });
})