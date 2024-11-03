let saveEl = document.getElementById("save-el");
let countElem = document.getElementById("count-el")


let count = 0;

function increment(){
    count+=1;
    countElem.textContent = count;
}

function save() {
    let saveTxt =  count + " - ";

    saveEl.textContent += saveTxt;
    countElem.textContent = 0; 
    count = 0;
}