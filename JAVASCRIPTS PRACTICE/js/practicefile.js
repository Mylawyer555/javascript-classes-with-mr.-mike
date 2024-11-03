

//Array
//This example finds (returns the value of) the first element that is larger than 12:
// const oddNumbers = [3,4,10,9,7,20,17,15,5,53,23];
// let first = oddNumbers.find(firstValue);

// function firstValue(value,index,array) {
//     if (value%2 >= 1 && value > 12) {
//         return oddNumbers.indexOf(value);
//     }

// }

// console.log(first);

//**************************************************************************** */
//  let myAge = 22;
//  let humanDogRatio = 7;
//  let myDogAge = myAge * humanDogRatio;

// ***********************************************************************************

// let bonusPoint = 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint - 75;
// console.log(bonusPoint);

// bonusPoint = bonusPoint + 45;


// console.log(bonusPoint);

// function myNumber(){
//     console.log(42);
// }

// myNumber();

// ********************************************
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// sum = 0;

// function lapSum(){
//     sum += lap1+lap2+lap3;
//     console.log(sum);
// }

// lapSum();

// ****************************************************

// let lapCompleted = 0;

// function numberLap(){
//     lapCompleted = lapCompleted + 1;
    

// }


// numberLap();
// numberLap();
// numberLap();
// console.log(lapCompleted);




// *********************************************************************
// let userName = "Per";
// let message = "You have three new notifications";

// let messageToUser = message + ", "+ userName + "!";

// console.log(messageToUser);

// ************************************************************************
// let name = "Sammy";

// let greeting = "Hi, my name is ";

// let myGreetings = greeting + name;

// console.log(myGreetings);


// console.log(4+5); //9
// console.log("2"+"4");  //24
// console.log("5"+1);  //51
// console.log(100+"100");  //100100



// let welcomeEl = document.getElementById("welcome-el")
// let myName = "Samuel Abel";
// let theGreeting = "Welcome back ";

// let welcomeMess = theGreeting + myName;

// welcomeEl.innerText = welcomeMess;


// let firstName = "Samuel ";
// let lastName = "Abel";

// let fullName = firstName + lastName;

// console.log(fullName);
// **********************************************************************
// function customergreetings(){
//     let name  = "Samuel";
//     let greeting = "Hi there, ";

//     let myGreeting = greeting + name + "!";
//     console.log(myGreeting);
// }

// customergreetings();
// *************************************************************************

// let myPoints = 3;

// function add3Points(){
//     myPoints += 3;
// }

// function remove1Points(){
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Points()
// remove1Points()

// console.log(myPoints);

// ********************************************************************

// console.log("2"+2);//22
// console.log(11 + 7);  //18
// console.log(6+"5");  //65
// console.log("My points " + 5 + 9); // My points 59
// console.log(2+2);  //4
// console.log("11" + "14"); //1114

// let errorMessage = document.getElementById("error");
// let message = "Something went wrong, please try again!"


// function err() {
//     errorMessage.innerText = message;
// }

// // *******************************************************************



// let num1 = 8;
// let num2 = 2;
// // document.getElementById("num1-el").textContent = num1;
// // document.getElementById("num2-el").textContent = num2;

// // let sumEl = document.getElementById("sum-el");


// function add(){
//     let result = num1 + num2;
//     sumEl.textContent = "sum: " + result;
// }

// function subtract(){
//     let result = num1 - num2;
//     sumEl.textContent = "sum: " + result;
// }

// function divide(){
//     let result = num1 / num2;
//     sumEl.textContent = "sum: " + result;
// }

// function multiply(){
//     let result = num1 * num2;
//     sumEl.textContent = "sum: " + result;
// }



// carName = "camry";

// const carName;

// console.log(carName);

// let text = "homemade"
// //let char = text.charAt(5);
// let code = text.charCodeAt(0)

// console.log(code);

//at() method return the character in a specific index position.
// let myCourse = "front-end engineering";
// let letters = myCourse.at(-13);
// letters = myCourse.length;
// letters = myCourse[2];
// console.log(letters);

//Extracting strings

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

let newTxt = "civil engineering";
let partStr = newTxt.slice(-12,-6);
//console.log(partStr);

//substring()
//The difference is that start and end values less than 0 are treated as 0 in substring().

let str = "lawyer, pastor, deacon";
let sub = str.substring(2,17)
//console.log(sub);

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
sub = str.substr(-7, 7)
//console.log(sub);


//Converting string to upper and lower case

let myStr = "What a wonderful day!";
let str22 = myStr.toUpperCase();
str22 = myStr.toLowerCase();
//console.log(str22);

//JavaScript String concat()
//concat() joins two or more strings
let txt1 = "Have";
let txt2 = "lovely day!"
let text3 = txt1.concat(" " + "a" + " " + txt2)
//console.log(text3);

//The trim() method removes whitespace from both sides of a string:
txt1 = "   i have   ";
text3 = txt1.trim();
text3 = txt1.trimStart();
text3 = txt1.trimEnd();
//console.log(text3);

//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.

let myWords = 5
let moreT = myWords.toString();
let padWord = moreT.padStart(6, "1");
padWord = moreT.padEnd(2, "2");
//console.log(padWord);

//repeat method 
let greet = "Hello world ";
let compl = greet.repeat(2);
//console.log(compl);

//replace method 
let exclain = "won\'t you visit us today? make sure you come visit us!"
let replacedWord = exclain.replace(/us/g, "me");
replacedWord = exclain.replaceAll(/us/g, "me");
//console.log(replacedWord);


//converting strings to array
//A string can be converted to an array with the split() method

let church = "typescript";
let newB = church.split("|");
console.log(newB);