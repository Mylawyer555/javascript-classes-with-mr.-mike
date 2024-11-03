const string = "The revolution will not be televised";
// console.log(string);

// string = "The revolution will not be televised;
// console.log(string);

const badString = string;
// console.log(badString);

let firstName = "Samuel";
let greetings = `GoodMorning ${firstName}, How was your Night?`;

//console.log(greetings);

//joining two variables
let myName = "Samuel Abel";
let time = "10:00am";
let prayTime = `Everyone included ${myName} are to meet in church by ${time} tomorrow.`

//console.log(prayTime);


//Joining two strings together(concatenation)
greetings = "Goodmorning" + ", " + firstName;
//console.log(greetings); 

const player = "Lionel Messi";
const votes = 9;
const higestVotes = 10;
let output = `I Samuel gave ${player} ${(votes / higestVotes) * 100}% \for the Ballon d'or Award ceremony. `

//console.log(output);


//Multiline strings
let studentInfo = `
Firstname: Samuel,
lastname: Abel,
Age: 35,
school: Accra Institute Of Technology

`

//console.log(studentInfo);


//Numbers and string

let number1 = 5;
let number2 = "5";

//console.log(number1 + number2); //concatenation
//console.log(number1 - number2); //subtraction


const street = "Ben Avenue";
const houseNum = 13;

let fullAddress = `My address is ${street}, ${houseNum}.`;

//console.log(fullAddress);


//converting  strings to numbers

let stringNumber = "10";

//console.log(Number(stringNumber) + 5);

// converting numbers to strings 

let number = 20;

//console.log(String(number) + " is my favorite number.");


let line = "2234";

//console.log(line.toString());
let newLine = (String(line));

//console.log(typeof newLine);

//String methods

//includes
let browserType = "mozilla";
if (browserType.includes('zilla')) {
   // console.log('Mo'+'zilla ' + "is a nice browser!!");
} else {
   // console.log("Not included!");
}

// startsWith and endsWith methods
if (browserType.startsWith("zilla")) {
    //console.log("found zilla");
} else {
  //  console.log("no zilla");
}

if (browserType.endsWith("zilla")) {
  //  console.log("found zilla");
} else {
   // console.log("no zilla!");
}

//indexOf method finds the first occurence in the string
let tagLine = 'AIT - This is where destinies are defined and destinies are nutured and groomed';
//console.log(tagLine.length);
//console.log(tagLine.indexOf("destinies"));
//console.log(tagLine.indexOf("p"));
// to find the subsequent occurences
firstOccurence = tagLine.indexOf("destinies");
//console.log(tagLine.indexOf("destinies"));

secondOccurence = tagLine.indexOf("destinies", firstOccurence + 1);
//console.log(secondOccurence);

// Extracting a substring from a string using - slice() method

let newSubstr = browserType.slice(1, 4);
//console.log(newSubstr);
newSubstr = browserType.slice(1,4);
//console.log(newSubstr);
let newConcat = newSubstr + browserType + newSubstr;
//console.log(newConcat);

//Changing case
let loData = "My NamE iS SaMuEL";
//console.log(loData.toLowerCase());
//console.log(loData.toUpperCase());

//updating part of a string

let az = loData.replaceAll("E", "A");
//console.log(az);

let updatedStr = browserType.replace("moz", "Van");
//console.log(updatedStr);

let newQuote = "what is worth doing, is worth doing well";
//console.log(newQuote);
newQuote = newQuote.replaceAll("doing", "done");
//console.log(newQuote);


//task
//const list = document.querySelector('.output ul');
//list.textContent = "";
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
    // write your code just below here
    const threeLetter = station.slice(0, 3);
   // console.log(threeLetter);
    
    const indexOfSemi = station.indexOf(";");
   // console.log(indexOfSemi);

    const humanReadable = station.slice(indexOfSemi + 1)
   // console.log(humanReadable);
    
    const jointWord = `${threeLetter}:${humanReadable}`


    

    const result = jointWord;
    
   // console.log(result);
    
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
}


let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

for (const element of myString) {

}






function printHundred(num) {
    for (let i = 0; i < 100; i++){

        console.log(i);
        
    }
}