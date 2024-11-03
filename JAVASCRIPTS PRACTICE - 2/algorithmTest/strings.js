
//convert a string to an array
             

let words = "Manu is not a football team";
// words = words.split("-");
// console.log(words);
// console.log("***********");
// console.log(words.join("-"));

// let newWords = "";
// for (let i = 0; i < words.length; i++){
//     let elem = words[i];

//     if (elem === "-"){
//         newWords += " ";
//     }
//     else{
//         newWords += elem;
//     }
// }
// console.log(newWords);


words = words.substring(0,5);
console.log(words);
let reverseWord = "";

for(let i = words.length-1; i>=0; i--){

    reverseWord+= words[i];

}
console.log(reverseWord);

// //return true of false if a particular string is palidrone.

//   //  ebube = true
//   //  timi = false
//   //mama = false
//   //ada = false
//     // let myName = "Samuel";
// //   let newCharacter = "";
// //   for(let i= myName.length-1; i >=0; i--){

// //         newCharacter 
// //   }

// // function newCharacter(){

// // }



// //find the missing number
// let arr = [5,3,2,6,7,9,1,4];
// let newArray = [];

// function missingNumber(){
//     for(i=0; i < 9; i++);

// }


// //Complete the function so that it converts dash/underscore delimited works into camel casing.
// //  The first word within the output should be compitalized only if the original word was capitalized.
//    // (Known as Upper camel case, also often referred to as pascal case).

//     Example:
//     (A) "the-stealth-warrior" gets converted to "theStealthWarrior"
//     (B) "The"