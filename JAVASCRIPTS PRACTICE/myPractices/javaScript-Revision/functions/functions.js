function random(number) {
    return Math.floor(Math.random() * number);
  }

//console.log(random());

const nerr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const bar = nerr.map(random);

//console.log(bar);



const myText = "I am a string";
const newString = myText.replace("string", "sausage");

//console.log(newString);


const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join("_");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join(' ');
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'


//functions with default values
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Sam!"); // Hello Ari!
hello(); // Hello Chris!
  


// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
//   }
  
//   textBox.addEventListener("keydown", logKey);

  
// arrowhead functions
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

///////////////////////////////////////////////

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
// output.textContent = `You pressed "${event.key}".`;
// });
  





alert("This is a message");
