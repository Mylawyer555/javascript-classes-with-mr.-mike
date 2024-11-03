function isEven(Element) {
    // if (Element % 2 === 0) {
    //     return true
    // }
    // return false;

    return Element % 2 === 0
}
// console.log(isEven(245));

// Using Every to iterate the array

//let result = [3, 4, 5, 6, 8].every(isEven);


let result = [2, 4, 8, 6, 8].every((e) => (e% 2 === 0));

console.log(result);
 
