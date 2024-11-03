let arr = [];
let str1 = "";

//console.log(arr.length)

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
   
    if (element % 3 === 0) {
        str1 += "Fizz";
    } 
    if (element % 5 === 0) {
        str1 += "Buzz";
    } break
    if ((element % 3 === 0 )&&( element % 5 === 0)) {
        str1 += "FIZZBUZZ";
    }
    
}


console.log(str1);




