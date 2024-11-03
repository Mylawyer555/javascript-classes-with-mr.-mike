

let playerOne = 'rock';
let computer = 'scissors';

if (playerOne === computer) {
    //tie game
} else if (playerOne === 'rock') {
    if (computer === 'paper') {
        console.log("computer wins");
        
    } else {
         console.log("playerOne wins");
    }
} else if (playerOne === 'paper') {
    if (computer === 'scissors') {
        // computer wins
    } else {
        //playerOne wins
    }
} else {
    if (computer=== 'rock') {
        //computer wins
    } else {
       // playerOne wins
    }
}
