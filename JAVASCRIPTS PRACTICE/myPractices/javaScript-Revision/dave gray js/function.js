//Function declaration syntax
function getUserNameFromEmail(email) {
    return email.toLowerCase().slice(0, email.indexOf("@"))
   
}

let userName = getUserNameFromEmail('user@gmail.com');

//console.log(userName);


// Arrow head functions
const collectUserNameFromEmail = (email) => {
    return email.toLowerCase().slice(0, email.indexOf("@")
    )
}
console.log(collectUserNameFromEmail('sam@mydomain.com'));



// changing string to proper case

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
console.log(toProperCase('mY naMe IS sAMuel'));




