

let counter = document.querySelector('.counter');
let myFollower = document.querySelector('.followers');

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);

setTimeout(() => {
    myFollower.innerHTML = "Followers on Instagram"
}, 5900);