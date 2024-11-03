// Array

const myArray = [];

// assigning values to array
myArray[0] = 'sam';
myArray[1] = false;
myArray[2] = 10890;


// length property
myArray.length

//-----------------------------------------------------------------//

//last position of array

myArray[myArray.length - 1]

myArray.push('yo!');



let latsitem = myArray.pop();

//console.log(latsitem);

// adding to the begining of the array

let addFront = myArray.unshift("Sliver");



// removing from the front of array
myArray.shift();

delete myArray[1];

myArray.splice(1,1,'light')

//console.log(myArray);

//-----------------------------------------------------//

const arr = ["A", "B", "C", "D", "E", "F"];

let newArr = arr.slice(2);

let isReversed = arr.reverse();


// join method

const newString = arr.join();



// split method return a new array

const myNewArr = newString.split(',')



//----------------------------------------------------------------------------//

//concat method

const myArrayA = [1, 2, 3, 4, 5];
const myArrayB = [6, 7, 8, 9, 10];

let conArr = myArrayA.concat(myArrayB);

console.log(conArr);


//using spread operators
 
let spread = [...myArrayA, ...myArrayB]

console.log(spread);









