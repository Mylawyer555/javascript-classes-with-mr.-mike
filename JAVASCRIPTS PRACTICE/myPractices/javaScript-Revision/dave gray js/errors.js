
//Javascript Errors

"use strict";

//Error types

//-----------------------References Error

// myName = "Samuel";
// console.log(myName);

// // syntax error

// Object..create()

// // typeError

// const food = "meat";
// food = "fruits";
// console.log(food);

const makeError = () => {

    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new error("Odd Numbers")
            }
            console.log("Even Number");
            
        } catch (error) {
            console.error(error.stack);
           
        } finally {
            console.log("Finally......");
            
        }
        i++;
    }
    
};

makeError();