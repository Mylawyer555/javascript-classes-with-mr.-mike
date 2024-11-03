// Numbers

// an integer is an whole number
const myNumber = 42;

// A number with decimal points is a float which is refered to as floating points

const float = 42.0;

const myString = '42.55abdh'; 

// Changing a string datatype to number by using a Number() function

console.log(Number(myString) === myNumber);


//---------------------------Number methods--------------------------------//

//isInteger() determines whether the number passed is an integer.
console.log(Number.isInteger(myString));

//parseFloat() parses an argument and returns a floating point

console.log(Number.parseInt(myString));

console.log(typeof float.toString());

console.log(typeof Number.parseFloat(myString));







