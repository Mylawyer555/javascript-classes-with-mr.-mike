const offenceForm = document.getElementById("offenceForm").addEventListener("submit", function (e) {
    e.preventDefault(); // function to prevent the javaScript default occurence
    console.log('Hello');

    const Name = document.getElementById("Name").value
    const PlateNumber = document.getElementById("PlateNo").value
    const Gender = document.getElementById("Gen").value
    const Contact = document.getElementById("Contact").value
    const Vehicle = document.getElementById("Vehicle").value
    const Offence = document.getElementById("Offence").value
    const Date = document.getElementById("TD").value
    const Location = document.getElementById("Location").value
    const Fine = document.getElementById("Fine").value
    //anything gotten from an input is (.value)

    const offender = {
        name: Name,
        plateNumber: PlateNumber,
        gender: Gender,
        contact: Contact,
        vehicle: Vehicle,
        offence: Offence,
        date: Date,
        location: Location,
        fine: Fine,
    }


    //saving to local storage JSON (parse and strigify)  it collects object becuse it operate with keys and value
    // getItem
    // setItem
    //removeItem
    //clear
    let offenders = JSON.parse(localStorage.getItem("offenders")) || [];
    offenders.push(offender);
    localStorage.setItem("offenders", JSON.stringify(offenders));
    //reset form
    document.getElementById("offenceForm").reset();

})