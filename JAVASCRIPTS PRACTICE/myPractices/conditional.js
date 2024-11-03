
// let temperature = -4;

// if (temperature < 40) {
//     console.log(`it's really cold outside`);
// }
// if (temperature > 40) {
//     console.log(`it's really hot outside`);
// }
// if (temperature <0) {
//     console.log(`Its snow out there`);
// }


let email = true;

let facebook = true;

let google = true;

// if (email) {
//     console.log("signup successful");
// }else {
//     console.log("signup failed");
// }

// if (facebook) {
//     console.log("signup successful");
// }else {
//     console.log("signup failed");
// }

// if (google) {
//     console.log("signup successful");
// }
// else {
//     console.log("signup failed");
// }


if (email || facebook || google) {
     console.log("signup successful");
}  
  else {
     console.log("signup failed");
}

if (email && facebook && google) {
     console.log("signup successful");
}
  else {
     console.log("signup failed");
 }