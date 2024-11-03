let firstCard = 11;
let secondCard = 10;
let hasBackJack = false;
let isAlive = true;

let sum = firstCard + secondCard ;
let message = "";


let messageEl = document.getElementById("message-el")
messageEl.textContent = message;
function startGame() {
    if(sum <= 20){
        message = "Do you want to draw a new card?";
        
    }else if(sum === 21){
        message = "Whooo!! You've got BlackJack!";
        hasBackJack = true
    }else{
        message = "Out of the game!"
        isAlive = false
    }
}



