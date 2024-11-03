//Currying is the process in functional programming in which we transform a function with multiple arguments into a sequence of nesting function that takes one arguments at a time.
// fn(a,b,c) = fn(a)(b)(c)

function sum(a,b,c) {
    return a + b + c;
}

console.log(sum(3, 4, 5));

// sum(3,4,5) = sum(3)(4)(5)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(3)(4)(5));

// Second syntax

const add1 = curriedSum(3);
const add2 = add1(4);
const add3 = add2(5);

console.log(add3);




