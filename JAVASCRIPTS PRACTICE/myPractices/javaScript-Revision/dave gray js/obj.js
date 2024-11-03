
const myObj = { name: 'sam' };

//console.log(myObj.name);

const anotherObj = {
    alive: true,
    bornagain: true,
    hobbies: ['Eat', 'sleep', 'code'],
    meal: {
        breakfast: 'bread and tea',
        lunch: 'afang soup',
        dinner: 'fruits'
    },
    action: function () {
        return `
        My hobbies are ${this.hobbies}.
        My best meal for lunch is ${this.meal.lunch}.
        `
    }
    
}

console.log(anotherObj.action());

