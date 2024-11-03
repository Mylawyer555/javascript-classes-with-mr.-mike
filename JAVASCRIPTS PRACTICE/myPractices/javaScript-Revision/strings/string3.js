// check if a string is a palindrome, a palidrome is when a string reads the same forwards and backwards e.g Ada => true, racecar => true

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
}

console.log(isPalindrome('stats'));




// function palindrome(str) {
//     let reversedString = "";
//     for (let index = str.length-1; index > 0; index--) {
        
//         reversedString += str[index];

//         if (str === reversedString ) {
//             return true;
//         }
//         return false;
        
//     }
// }

// console.log(palindrome("racecar"));
