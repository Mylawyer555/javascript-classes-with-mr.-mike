// Fundamentals
//let, const,var to declare a variable

// let firstName = "Samuel";
// if (firstName) {
//     if(firstName.length<3 || typeof firstName){
//         console.error("Please enter a valid name")
//     }else{
//         console.log(`Good morning ${firstName}`);
//     }
// } 
// else {
//     console.log("Please enter your name");
// }


// let score = 40;
// let grade = "";
// if (score >= 70 && score <= 100) {
//     grade = "A";
// } else if (score >= 60 && score < 70){
//     grade = "B";
// } else if(score >= 50 && score < 60){
//     grade = "C";
// } else if(score >= 40 && score < 50){
//     grade = "D";
// } else if(score >=0 && score < 40){
//     grade = "F";
// }
// else{
//     grade = "Wrong score";
// }

// console.log(`grade = ${grade}`);


//switchcase

// let grade = "";
// //  let score = 65;
// let days = "";
// switch (days) {
//     case "Monday":
//         grade = "Today is monday and begining of the week";
//         break;
//     case "Tuesday":
//         grade = "Today is Tuesday and begining of the week";
//         break;
//     case "Wednesday":
//         grade = "Today is wednesday and begining of the week";
//         break;
//     default:
//         break;
// }     


// let number = 3;
// let result = Math.pow(number, 2);

// console.log("The square of: " + result);

// let no = 345.89;
// console.log(Math.floor(no));
// console.log(Math.round(no));
// console.log(Math.ceil(no));


// let tennisPlayers = 10 ;
// let tennisCourt = 2;


// function gamesHosted(tennisPlayers,tennisCourtc) {
//     let allowedPlayers = Math.floor(tennisPlayers/2);
//     if (allowedPlayers > tennisCourt ) {
//         return tennisCourt;
//     }
//     return allowedPlayers;
// }

// console.log(gamesHosted(2,5));


                            //Loop
//A loop is a way of repeating a particular statement over again as long as the condition is still Valid

let num = 10;
// for(let i = 1; i<= num; i+=2){
//     console.log(`${i}: I Love you`)
// }

//sum even number 1 to 10
//let sum = 0;
// for(let i=0; i <= num; i+=2){
//     sum+=i;
// }


// for(let i=0; i<= num; i++){
//     if(i%2===0){
//         sum+=i;
//     }
// }
// console.log(`sum = ${sum}`);


//while loop

// let i=0;
// let sum=0;
// while(i<=10){
//     if(i%2===0)sum+=i;
//     i++
// }

// console.log(`sum =${sum}`);


//do while loop
// let i=12;

// do{
   
//     let myInput= "select from option\n1. Deposit\n2. Withdrawal\n3. Transfer\n4. Check Balance";
//     let option = "";
//     let input = parseFloat(prompt(myInput));
    
// if(input===1){
//     let depo = parseFloat(prompt("Enter amount to deposit"));
//     deposit(depo);
// }

// option = prompt("Do you to peform another transaction? (yes/no").toLowerCase();
// alert("Thank you for banking with us");

// }while(i<=14);
// let bal = 200;
// function deposit(amount){
//     return bal+=amount;
// }



/// functions

// function hello(name){
//     if(name){
//         return `Hello ${name} how are you doing`;
//     }
//     return `How are you doing`;
// }

// console.log(hello("Samuel"));

// function numbers(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }

// console.log(numbers(1,4,7));

// function sumAll(a,b,...c){
//     let total = a+b;
//     let num = [...c];
//     for(let i = 0; i<num.length; i++){
//         total+=num[i];
//     }
//     return total;
// }
// console.log(sumAll(2,4,8,7,9,55));

//Array

// const carts = ["mango","fanta","orange","eggs","bread"]
// //length
// let len = carts.length;
// //console.log(len);

// //access the elements of array
// let first = carts[2];
// //console.log(first);
// let last = carts[carts.length - 1];
// console.log(last);


// //Touching every element in array
// for (let items of carts) {
//     console.log(items);
// }
// console.log("************************************");
// carts.forEach(cart => console.log(cart));

// carts.forEach((index, cart) => console.log(index + ":" + cart));
// console.log("*********************************");
// for (let i = 0; i < carts.length; i++){
//     console.log(carts[i]);
// }


// console.log("*****************************************");
// //Revome the last element
// let removeLast = carts.pop();
// console.log(removeLast);
// console.log(carts);

// //remove first
// let firstRemoved = carts.shift();
// console.log(carts);

// //Add to the end of array
// carts.push("Avogadro");
// console.log(carts);

// //Add to the biginning
// carts.unshift("Watermelon")
// console.log(carts);

// //check if an array include an item

// let isMango = carts.includes("fanta")
// console.log(isMango);

// //To find the indexOf
// let itemIndex = carts.indexOf("fanta");
// console.log(itemIndex);

// //if an element is not is included in the array it returns -1

// //to join an array together

// let prices = [30, 40, 550,];
    
// let newArray = carts.concat(prices);
// let newArr2 = [carts, ...prices];
// console.log();

// //copy
// arr2 = carts.slice();
// // copy last to element to a new array
// arr2 = carts.slice(arr2.length - 2);
// console.log(arr2);

// //converting an array to a string
// let newCart = carts.toString();

// console.log(newCart);
// console.log(typeof newCart);

// //converting back to array
// let convertArrStr = newCart.split(",")[0];
// console.log(convertArrStr);


// //Classwork
// //write a js program to move all zero element to the far right of array

// function moveZero(myArray) {
//     let nonZeroIndex = 0;

//     for (let i = 0; i < myArray.length; i++){
//         if (myArray[i] !==0) {
//             [myArray[nonZeroIndex], myArray[i]] = [myArray[i], myArray[nonZeroIndex]];
//             nonZeroIndex++;
//         }
//     }
//     return myArray;
// }

// console.log(moveZero([0,2,0,0,3,9,5,7]))

// function moveZero(arr) {
//     let onlyZero = [];
//     let otherNumbers = [];

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == 0) {
//             onlyZero.push(arr[i])
//         } else {
//             otherNumbers.push(arr[i])
//         }
//     }
//     return otherNumbers.concat(onlyZero);
// }
// console.log(moveZero([0, 9, 4, 0, 0, 4, 5, 6, 7]));

// Object


const student = {
    firstName: "Chioma",
    lastName: "Korede",
    age: 18,
    favFood: ["rice", "beans", "plantain"],
    skills: ["HTML", "CSS", "javaScript"], 
    address: {
        street:"345 Oke Street",
        city: "Lagos",
        country: "Nigeria",
    },

    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
}

//access object
//1. Dot notation
//2. square bracket

//console.log(staudent.fullName());
//console.log(student["favoriteFood"][0]);

// console.log(student.address.city);
// console.log(student["skills"][2]);

//console.log(Object.keys(student));// comes back with object of keys
console.log(Object.values(student));// comes back with values 
console.log(Object.entries(student));
//To check if lastName is in student

if ("lastName" in student) {
    student.lastName = "santos";
}

console.log(student);

//delete student.lastName

const employees =[{
  "id": 1,
  "first_name": "Christoforo",
  "last_name": "Nisen",
  "email": "cnisen0@icio.us",
  "gender": "Male",
  "address": "Room 598",
  "department": "Support",
  "salary": "$2.08"
}, {
  "id": 2,
  "first_name": "Garvey",
  "last_name": "Moules",
  "email": "gmoules1@twitpic.com",
  "gender": "Male",
  "address": "Suite 6",
  "department": "Engineering",
  "salary": "$0.54"
}, {
  "id": 3,
  "first_name": "Artur",
  "last_name": "Ferne",
  "email": "aferne2@ameblo.jp",
  "gender": "Male",
  "address": "Suite 45",
  "department": "Support",
  "salary": "$1.73"
}, {
  "id": 4,
  "first_name": "Cayla",
  "last_name": "Kindred",
  "email": "ckindred3@addtoany.com",
  "gender": "Female",
  "address": "14th Floor",
  "department": "Services",
  "salary": "$0.31"
}, {
  "id": 5,
  "first_name": "Aggi",
  "last_name": "McCafferky",
  "email": "amccafferky4@privacy.gov.au",
  "gender": "Female",
  "address": "Apt 1005",
  "department": "Research and Development",
  "salary": "$4.12"
}, {
  "id": 6,
  "first_name": "Gabriel",
  "last_name": "Beddo",
  "email": "gbeddo5@dedecms.com",
  "gender": "Male",
  "address": "Suite 19",
  "department": "Accounting",
  "salary": "$3.89"
}, {
  "id": 7,
  "first_name": "Giulio",
  "last_name": "Kinglake",
  "email": "gkinglake6@zimbio.com",
  "gender": "Male",
  "address": "Suite 82",
  "department": "Marketing",
  "salary": "$2.69"
}, {
  "id": 8,
  "first_name": "Isiahi",
  "last_name": "Hilldrup",
  "email": "ihilldrup7@prlog.org",
  "gender": "Male",
  "address": "Apt 1801",
  "department": "Business Development",
  "salary": "$8.46"
}, {
  "id": 9,
  "first_name": "Kaleena",
  "last_name": "McCrackan",
  "email": "kmccrackan8@amazon.com",
  "gender": "Female",
  "address": "PO Box 34924",
  "department": "Marketing",
  "salary": "$9.49"
}, {
  "id": 10,
  "first_name": "Amandie",
  "last_name": "MacIlhargy",
  "email": "amacilhargy9@arstechnica.com",
  "gender": "Female",
  "address": "Suite 45",
  "department": "Training",
  "salary": "$1.25"
}, {
  "id": 11,
  "first_name": "Matias",
  "last_name": "Sissons",
  "email": "msissonsa@state.gov",
  "gender": "Male",
  "address": "PO Box 28912",
  "department": "Product Management",
  "salary": "$5.77"
}, {
  "id": 12,
  "first_name": "Lorene",
  "last_name": "Lalley",
  "email": "llalleyb@pagesperso-orange.fr",
  "gender": "Female",
  "address": "Apt 1073",
  "department": "Accounting",
  "salary": "$0.71"
}, {
  "id": 13,
  "first_name": "Brantley",
  "last_name": "Deverale",
  "email": "bdeveralec@youtube.com",
  "gender": "Male",
  "address": "PO Box 21780",
  "department": "Training",
  "salary": "$5.99"
}, {
  "id": 14,
  "first_name": "Albina",
  "last_name": "Grzesiewicz",
  "email": "agrzesiewiczd@pcworld.com",
  "gender": "Female",
  "address": "16th Floor",
  "department": "Business Development",
  "salary": "$1.28"
}, {
  "id": 15,
  "first_name": "Ashil",
  "last_name": "Jalland",
  "email": "ajallande@blogs.com",
  "gender": "Female",
  "address": "PO Box 39509",
  "department": "Support",
  "salary": "$4.28"
}, {
  "id": 16,
  "first_name": "Ursala",
  "last_name": "Wey",
  "email": "uweyf@a8.net",
  "gender": "Female",
  "address": "PO Box 86890",
  "department": "Marketing",
  "salary": "$2.60"
}, {
  "id": 17,
  "first_name": "Selena",
  "last_name": "Dominique",
  "email": "sdominiqueg@posterous.com",
  "gender": "Female",
  "address": "Apt 81",
  "department": "Accounting",
  "salary": "$4.49"
}, {
  "id": 18,
  "first_name": "Thain",
  "last_name": "Bilbery",
  "email": "tbilberyh@bloglines.com",
  "gender": "Male",
  "address": "Suite 35",
  "department": "Support",
  "salary": "$3.06"
}, {
  "id": 19,
  "first_name": "Eimile",
  "last_name": "Yandell",
  "email": "eyandelli@webeden.co.uk",
  "gender": "Female",
  "address": "Apt 1871",
  "department": "Legal",
  "salary": "$8.89"
}, {
  "id": 20,
  "first_name": "Silvester",
  "last_name": "Halwood",
  "email": "shalwoodj@myspace.com",
  "gender": "Male",
  "address": "Apt 1086",
  "department": "Support",
  "salary": "$9.73"
}, {
  "id": 21,
  "first_name": "Drucy",
  "last_name": "Milburne",
  "email": "dmilburnek@ebay.com",
  "gender": "Female",
  "address": "PO Box 81367",
  "department": "Engineering",
  "salary": "$4.55"
}, {
  "id": 22,
  "first_name": "Herbie",
  "last_name": "Errichelli",
  "email": "herrichellil@sphinn.com",
  "gender": "Male",
  "address": "PO Box 62846",
  "department": "Sales",
  "salary": "$0.01"
}, {
  "id": 23,
  "first_name": "Veronika",
  "last_name": "Spreadbury",
  "email": "vspreadburym@theguardian.com",
  "gender": "Female",
  "address": "Suite 34",
  "department": "Engineering",
  "salary": "$4.48"
}, {
  "id": 24,
  "first_name": "Alana",
  "last_name": "Kemell",
  "email": "akemelln@simplemachines.org",
  "gender": "Female",
  "address": "Room 437",
  "department": "Training",
  "salary": "$7.27"
}, {
  "id": 25,
  "first_name": "Kaleena",
  "last_name": "Kalaher",
  "email": "kkalahero@jimdo.com",
  "gender": "Female",
  "address": "Apt 345",
  "department": "Research and Development",
  "salary": "$5.07"
}, {
  "id": 26,
  "first_name": "Kellen",
  "last_name": "Gadney",
  "email": "kgadneyp@seattletimes.com",
  "gender": "Female",
  "address": "Apt 279",
  "department": "Marketing",
  "salary": "$6.24"
}, {
  "id": 27,
  "first_name": "Vin",
  "last_name": "Southcomb",
  "email": "vsouthcombq@noaa.gov",
  "gender": "Male",
  "address": "PO Box 77310",
  "department": "Engineering",
  "salary": "$7.01"
}, {
  "id": 28,
  "first_name": "Kissee",
  "last_name": "Cumberledge",
  "email": "kcumberledger@cornell.edu",
  "gender": "Female",
  "address": "PO Box 72223",
  "department": "Accounting",
  "salary": "$8.98"
}, {
  "id": 29,
  "first_name": "Tine",
  "last_name": "Edmed",
  "email": "tedmeds@bloglines.com",
  "gender": "Female",
  "address": "10th Floor",
  "department": "Services",
  "salary": "$8.86"
}, {
  "id": 30,
  "first_name": "Pryce",
  "last_name": "Hilldrop",
  "email": "philldropt@stanford.edu",
  "gender": "Male",
  "address": "Room 1608",
  "department": "Marketing",
  "salary": "$4.39"
}, {
  "id": 31,
  "first_name": "Abraham",
  "last_name": "Drewell",
  "email": "adrewellu@clickbank.net",
  "gender": "Male",
  "address": "14th Floor",
  "department": "Marketing",
  "salary": "$1.76"
}, {
  "id": 32,
  "first_name": "Cherrita",
  "last_name": "Kintzel",
  "email": "ckintzelv@about.com",
  "gender": "Female",
  "address": "Suite 100",
  "department": "Accounting",
  "salary": "$3.29"
}, {
  "id": 33,
  "first_name": "Whitaker",
  "last_name": "Monkton",
  "email": "wmonktonw@clickbank.net",
  "gender": "Male",
  "address": "PO Box 75488",
  "department": "Product Management",
  "salary": "$2.98"
}, {
  "id": 34,
  "first_name": "Ferdie",
  "last_name": "Gotthard",
  "email": "fgotthardx@vinaora.com",
  "gender": "Male",
  "address": "20th Floor",
  "department": "Legal",
  "salary": "$7.58"
}, {
  "id": 35,
  "first_name": "Cori",
  "last_name": "Gustus",
  "email": "cgustusy@trellian.com",
  "gender": "Male",
  "address": "3rd Floor",
  "department": "Accounting",
  "salary": "$4.69"
}, {
  "id": 36,
  "first_name": "Napoleon",
  "last_name": "Pescod",
  "email": "npescodz@google.de",
  "gender": "Male",
  "address": "PO Box 11450",
  "department": "Support",
  "salary": "$2.66"
}, {
  "id": 37,
  "first_name": "Edwin",
  "last_name": "Seeley",
  "email": "eseeley10@fc2.com",
  "gender": "Male",
  "address": "Suite 95",
  "department": "Support",
  "salary": "$9.41"
}, {
  "id": 38,
  "first_name": "Gayel",
  "last_name": "Hazel",
  "email": "ghazel11@paypal.com",
  "gender": "Female",
  "address": "Room 167",
  "department": "Engineering",
  "salary": "$8.65"
}, {
  "id": 39,
  "first_name": "Lesly",
  "last_name": "Gonsalvo",
  "email": "lgonsalvo12@tamu.edu",
  "gender": "Female",
  "address": "15th Floor",
  "department": "Marketing",
  "salary": "$6.33"
}, {
  "id": 40,
  "first_name": "Darnell",
  "last_name": "Edmed",
  "email": "dedmed13@instagram.com",
  "gender": "Male",
  "address": "Room 1348",
  "department": "Product Management",
  "salary": "$7.46"
}, {
  "id": 41,
  "first_name": "Erastus",
  "last_name": "Francescoccio",
  "email": "efrancescoccio14@bloglines.com",
  "gender": "Male",
  "address": "11th Floor",
  "department": "Human Resources",
  "salary": "$1.07"
}, {
  "id": 42,
  "first_name": "Rosalia",
  "last_name": "Lukasik",
  "email": "rlukasik15@economist.com",
  "gender": "Female",
  "address": "19th Floor",
  "department": "Services",
  "salary": "$2.00"
}, {
  "id": 43,
  "first_name": "Urson",
  "last_name": "Van Der Walt",
  "email": "uvanderwalt16@constantcontact.com",
  "gender": "Male",
  "address": "Apt 1468",
  "department": "Engineering",
  "salary": "$7.73"
}, {
  "id": 44,
  "first_name": "Moyna",
  "last_name": "Klimschak",
  "email": "mklimschak17@skyrock.com",
  "gender": "Female",
  "address": "14th Floor",
  "department": "Support",
  "salary": "$9.33"
}, {
  "id": 45,
  "first_name": "Thatcher",
  "last_name": "Alejo",
  "email": "talejo18@myspace.com",
  "gender": "Male",
  "address": "Apt 652",
  "department": "Accounting",
  "salary": "$8.86"
}, {
  "id": 46,
  "first_name": "Lilah",
  "last_name": "Wurst",
  "email": "lwurst19@elpais.com",
  "gender": "Female",
  "address": "Suite 63",
  "department": "Training",
  "salary": "$3.27"
}, {
  "id": 47,
  "first_name": "Maxim",
  "last_name": "McCleary",
  "email": "mmccleary1a@dot.gov",
  "gender": "Male",
  "address": "PO Box 60741",
  "department": "Services",
  "salary": "$9.67"
}, {
  "id": 48,
  "first_name": "Luciana",
  "last_name": "Worboys",
  "email": "lworboys1b@free.fr",
  "gender": "Female",
  "address": "PO Box 26131",
  "department": "Accounting",
  "salary": "$9.64"
}, {
  "id": 49,
  "first_name": "Rafael",
  "last_name": "Foord",
  "email": "rfoord1c@spotify.com",
  "gender": "Male",
  "address": "17th Floor",
  "department": "Legal",
  "salary": "$7.82"
}, {
  "id": 50,
  "first_name": "Haslett",
  "last_name": "McQuaker",
  "email": "hmcquaker1d@nyu.edu",
  "gender": "Male",
  "address": "1st Floor",
  "department": "Legal",
  "salary": "$6.24"
}]


function getGender(sex, country, id) {
    return employees
        .filter((employee) => employee.gender === sex)
        .filter((employee) => employee.country === country)
        .filter((employee) => employee.id === id)
}

console.log(getGender("Male","China"));

function higestPaid(arr) {
    let highestPay = employees[0];
    for (let i = 0; i < employees.length; i++){
        if (highestPay.salary < employees[i].salary) {
            highestPay = employees[i];
        }
    }
    return highestPay;
}
console.log(higestPaid(employees));

//foreach loop

//employees.forEach((employee) => console.log(employee));

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((num) => {
    if (num % 2 == 0) {
        sum += num;
    }
});
console.log(`sum = ${sum}`);

const onlyOddAdd = [2, 4, 10, 2, 99, 45];
let sumOdd = 0;

onlyOddAdd.forEach((num, index) => {
    if (index % 2 === 1) {
        sumOdd += num;
    }
})

console.log(`Sum Odd = ${sumOdd}`);


//Modern Function
//Arrow Head function

const findMax = (arr) => {
    let max = arr[0];

    for (let num of arr) {
        if (max < num) {
            max = num;
        }
    }
    return max;
};

console.log(findMax(onlyOddAdd));

const addTwo = (a, b) => {
    return a + b;
};
// console.log(addTwo(45, 90));

// find - es6 function
const findEmployeeById = id => {
    return employees.find((employee) => console.log(employee.id === id));
};

// console.log(findEmployeeById(1));

const findEmployeeIndex = (email) => {
    let result = employees.findIndex((employee) => employee.email === email);
    if (result !==-1) {
        return employees[result];
    } else {
        return "sorry no user found";
    }
};

const findEmployeeName = (last_name, id) => {
    let results = employees.every((employee) => employee.last_name === last_name && employee.id === id);
    if (results !== false ) {
        return employees[results];
    } else {
        return "sorry result not found";
    }
}

console.log(findEmployeeName("Ferne", 3));

// console.log(findEmployeeIndex("aferne2@ameblo.jp"));

//check how -- every, some,


//Disstructing
//disstructing is means of extracting values from an array or object into a new array

const fruits = ["mango", "banana","apple","lemon","walnut"];
[a, b,...c] = fruits;
// console.log(c);
 
const clients = {
    userName: "John22",
    firstName: "John",
    lastName: "Ama",
    age: "44",
    location: "Nigeria"
}

const {userName,age,lastName} = clients;

// console.log(lastName);
    