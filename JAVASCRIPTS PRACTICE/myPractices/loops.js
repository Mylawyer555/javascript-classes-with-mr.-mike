const states = [
    'abia',
    'akwa ibom',
    'bauchi',
    'kano',
    1962,
    false,
    'rivers',
    'niger',
    'imo'
];

// for (let i = 0; i < states.length; i++) {

//     if (typeof states[i] !== "number") continue;
//         console.log(states[i])
    
// }

// let i = 0;

// while (i< states.length) {
//     console.log(`List of states:
//         ${states},
        
//         `);
    
//     i++
// }

// let i = 0;
// do {
//     console.log(states);
//     i++
    
// } while (i < states.length);

//states.forEach((s) => (console.log(s)));




//For of loop
const newNames = ["facebook", "Virgin Air", "Amazon", "Twitter", "snapChat"]

for (const element of newNames) {
    console.log(element);
    
}

const symbols = {
    yb: "youtube",
    fb: "facebook",
    fcb: "Barcelona"
}

for (const key in symbols) {
 console.log(`Key:${key} and values: ${symbols[key]}`)
}