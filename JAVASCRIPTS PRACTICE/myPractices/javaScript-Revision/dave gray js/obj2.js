//objects
// Key Value pairs in curly braces

const vehicles = {
    wheels: 4,
    engine: function () {
        return 'Vroooom!!'
    }
}

// const truck = Object.create(vehicles);
// truck.door = 2;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());
// the truck inherited the properties from vehicles

const car = Object.create(vehicles);
car.doors = 4;
car.engine = function (){
    return 'Grrooonnn'
};
//console.log(car.engine());

const tesla = Object.create(car);
//console.log(tesla.wheels);
tesla.engine = function () {
    return 'shhiiiiii'
}

//console.log(tesla.engine());

//-----------------------------------------------------------------------------------------------------//

const band = {
    vocals : "Robert plant",
    guitar: "Jimmy Page",
    bass: "John Paul",
    drums: "Boham"
 }

// to add properties
band.keyboard = "Samuel Abel";

// to delete properties
delete band.bass;

console.log(band.hasOwnProperty("bass"));

console.log(Object.keys(band));
console.log(Object.values(band));
 
// For in loop

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
    
}

//------------------------------------------------------------------//
//---------------------DESTRUCTING OBJECTS-------------------------//

const footballers = {
    striker: "Messi",
    Midfielder: "Inesta",
    defender: "Canavarro",
    rightBack: "danny Alves"
};

const { striker, defender } = footballers;
console.log(striker);
console.log(defender);

// can also be passed in a function

function des({defender, striker, rightBack}) {
    return `
    I would rather prefer ${striker} as false nine, while ${rightBack}
    as my all time right back. Finally, Not forget ${defender}, he was a gem!`
}

console.log(des(footballers));



