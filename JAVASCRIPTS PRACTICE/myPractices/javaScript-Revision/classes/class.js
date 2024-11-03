class person {
    constructor(fName, lName) {
        this.firstname = fName;
        this.lastname = lName;

    }

    sayMyName() {
        return this.firstname + ' ' + this.lastname;
     }
}
// create instances of this person

const classP1 = new person('lolo', 'bara');

//console.log(classP1.sayMyName());

//-----------------------------Inheritance
// two keywords take care of the entire inheritance (extends and super)

class superHero extends person {
    constructor(fName, lName) {
        super(fName, lName)
        this.superHero = true;
    }

    fightcrime() {
        console.log('Fighting crime');
        
    }
}

const superman = new superHero('boyle', 'kent');
console.log(superman.sayMyName());

