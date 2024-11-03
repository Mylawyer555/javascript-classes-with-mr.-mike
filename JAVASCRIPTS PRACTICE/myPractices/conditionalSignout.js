//Show user signOut button if he's authenticated
// Other wise show him an option to login or signUp

let userAuthentication = true;

// if (userAuthentication) {
//     console.log("show signout button");
// } else {
//     console.log("Show login option");
// }

userAuthentication ? console.log("Show SignOut Button") : console.log("Show Login Button");