let shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);


const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2], { classname: "Samuel" }];
console.log(random.length);

//modifying arrays
 shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]);
// returns "bread"
shopping[0] = "wine";
console.log(shopping);

const numss = [2, 3, 4, 6, [22, 12, 34, 43,[23,4,5,4]]];
console.log(numss[4][4][0]);


const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
console.log(birds.indexOf("rat"));


// Adding items to the back of the array using - push()
const cities = ['manchester', 'liverpool', 'barcelona', 'paris'];
cities.push('berlin');
console.log(cities);
cities.push('madrid', 'lagos', 'port harcourt');
console.log(cities);
console.log(cities.length);

//adding items to the front of the array using - unshift()
cities.unshift("Tokyo");
console.log(cities);

// removing last item in an array using - pop()
cities.pop();
console.log(cities);

// removing first item in an array using - shift()
cities.shift();
console.log(cities);

// removing items from array using splice()
const idx = cities.indexOf("barcelona");
if (idx !== -1) {
    cities.splice(idx, 4)
} 

console.log(cities);

//accessing every items in an array using for...of statement
for (const bird of birds) {
   console.log(bird);
   
    
}


function diff(numbers) {
    return numbers - 1
}

const numbers = [3, 4, 5, 6, 7];
let newDiff = numbers.map(diff);

console.log(newDiff);


//using filter()
function isLong(city) {
    return city.length > 8;
  }
  const city = ["London", "Liverpool", "Totnes", "Edinburgh"];
  const longer = city.filter(isLong);
  console.log(longer); // [ "Liverpool", "Edinburgh" ]
  
function isMatch(names) {
    return names.includes('sam');
}
let names = ['samuel', 'john', 'james', 'jude'];
let filteredNames = names.filter(isMatch);

console.log(filteredNames);


//converting strings and arrays 
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const newCity = data.split(",");
console.log(newCity);
console.log(newCity.length);
console.log(newCity[1]);
console.log(newCity[0]);
console.log(newCity[newCity.length - 1]);
let newF = newCity.indexOf("Liverpool");
console.log(newF);
let repl = newCity.splice(2, 1,"Barcelona","Madrid");
console.log(newCity);




// converting to array to strings
const newStr = newCity.join("|");
console.log(newStr);
let secondMed = newCity.toString();

console.log(secondMed);


//task
// number 1
let total = 0;
const products =
		        ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'
    ];




// number 2
for(const product of products){
    const subArray = product.split(":");
    // console.log(subArray);
    
	const itemName = subArray[0];
	const itemPrice = Number(subArray[1]);
    total += itemPrice;
    
    let invoice = `${itemName} - $${itemPrice}`
    console.log(invoice);
    

}

let totalItems = `Total: ${total.toFixed(2)}`
  
console.log(totalItems);







