
function person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

const p1 = new person('Samuel', 'Abel');
const p2 = new person('Samuel', 'Tony');

person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

// console.log(p1.getFullName());
// console.log(p2.getFullName());

//----------------------Inheritance
const superHero = function (fName, lName) {
    person.call(this,fName, lName)
    this.isSuperHero = true;
}

superHero.prototype.fightCrime = function () {
    console.log('crime fighting');
}

superHero.prototype = Object.create(person.prototype)
superHero.prototype.constructor = superHero
const batMan = new superHero('Bruce', 'Wayn');

console.log(batMan.getFullName());
