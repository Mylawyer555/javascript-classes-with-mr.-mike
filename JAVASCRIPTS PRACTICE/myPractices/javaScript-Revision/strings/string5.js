// move all zeroes in an array to the end while maintaining the relative order of other elements. eg [0,1,0,3,12], Output: [1,3,12,0,0]

// function moveZeroes(arr) {
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!== 0) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;
//         }
//     }
//     return arr.slice(0, j);


// }

// let testArray = [0, 1, 0, 3, 12];

// console.log(moveZeroes(testArray)); // Output: [1, 3, 12, 0, 0]

 function sortArray(array) {

     testArray = [13, 4, 0, 0, 5, 10];

     array.sort((a, b) => a - b);

     return array;
     
     
     
     
     
    

}
 let newOne = [0,4,0,3,8,9]
console.log(sortArray(newOne));

