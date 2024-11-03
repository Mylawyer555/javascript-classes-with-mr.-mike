// OR satatement one statement has to be true
let iceCreamVanOutside = true;

let houseStatus = "Not on fire";

if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.");
  } else {
    console.log("Probably should just stay in then.");
  }
  
// Negating the OR statement
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
    console.log("You should leave the house quickly.");
  } else {
    console.log("Probably should just stay in then.");
  }
  