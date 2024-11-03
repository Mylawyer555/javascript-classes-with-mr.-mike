//This keyword when used in a function refers to the object in belongs to.
//It make function reuseable by determining the the object value and this object is determined by how the value is called.
//---------------------------------------------------------------//


// function sayMyname(name) {
//     console.log(`My name is ${name}`);
    
// }
//sayMyname(`Samuel`);


//------------------------How to determine THiS-------------------------//

//Implicit Binding - will tell you what THIS refers to most often. it also states that when its invoked with the "." notation the object on the left is the absolute reference.

const person = {
    name : "Samuel",
    sayMyName: function () {
        console.log(`My name is ${this.name}`);
        
    },
} 
//--we use the "." notation to invoke
//person.sayMyName()


// Rule 2 : Explicit Binding - using the call method to explicitly determine the context to which the function is called. in javaScript every method has a built in function "call" to specify the context.
//-----------
//For global scope
// for browswer  const name = ' Samuel';
// for Node 
globalThis.name = "Samuel Abel";

function sayMyName() {
    console.log(`My new name is ${this.name}`);
    
}
//sayMyName.call(person);


//Rule 3 : New keyword - the function is invoked with THis refrencing an empty object

function persons(name) {
    //this = {}
    this.name = name;
}

const p1 = new persons('Abel');
const p2 = new persons('Samuel');
const p3 = new persons('Favour');

console.log(p1.name, p2.name, p3.name);


//Rule 4 : Default binding - its is the fall back if none of the other rules are matched, javascripts refers back to the global scope.

sayMyName();


//---------------- Orde Of Precedence
// New
// Explicit
// Inplicit
// Default


