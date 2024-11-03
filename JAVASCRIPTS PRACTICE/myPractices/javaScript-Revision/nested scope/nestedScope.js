// Block scope - varibles declared inside a pair of curly braces cannot be accessed outside the block.

// Function scope - states that variables declared inside a function cannot be accessed outside the scope.

// Global scope - variables declared can be accessed anywhere inside a function or block.


//Nested function scope - here javascript lookup starts from the innermost fuction where the variable is to be accessed and moves upwards till it reaches the global variable. they have access to variable in thier own scope as well as outerscope.

let a = 10;

function outer () {
    let b = 20;
    function inner() {
        let c = 38;
        console.log(a + b / c);
        
    }
    inner();
}
outer();
