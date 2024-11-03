// For...of loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  //console.log(`${cat} - animal`);
}

// map() > does something to each item in a collection, creates a new collection containing the changed items.

function toUpper(string) {
    
    string[0].toUpperCase();
    return string
  }
  
  const myCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const upperCats = myCats.map(toUpper);
  
  //console.log(upperCats);
  

// filter() - filter test each item in a collection and returns the new collection with the items that match.
function lCat(cat) {
    return cat.endsWith("r");
  }
  
  const familyCats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const filtered = familyCats.filter(lCat);
  
  console.log(filtered);
  // [ "Leopard", "Lion" ]

//OR
  

const newFilter = familyCats.filter((cat) => (cat.startsWith("C")));

console.log(newFilter);


//For...loop

function calculate() {
    for (let i = 1; i < 10; i++) {
      const newResult = `${i} x ${i} = ${i * i}`;
     
        console.log(newResult);
        
      
    }
    
  }
calculate()


const catList = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < catList.length; i++) {
  if (i === catList.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${catList[i]}.`;
  } else {
    myFavoriteCats += `${catList[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


// const contacts = [
//     "Chris:2232322",
//     "Sarah:3453456",
//     "Bill:7654322",
//     "Mary:9998769",
//     "Dianne:9384975",
//   ];
//   const para = document.querySelector("p");
//   const input = document.querySelector("input");
//   const btn = document.querySelector("button");
  
//   btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";
    
//     for (const contact of contacts) {
//         let splitContact = contact.split(":");
    
        
        
//       if (splitContact[0].toLowerCase() === searchName) {
//         para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//         break;
//       }
//     }
//     if (para.textContent === "") {
//       para.textContent = "Contact not found.";
//       }
      
//   });



// While loop

let i = 0;

while (i < catList.length) {
  if (i === catList.length - 1) {
    myFavoriteCats += `and ${catList[i]}.`;
  } else {
    myFavoriteCats += `${catList[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

  
//do while loops the code block is executed atleast once before the condition is checked

let a = 0;

do {
    if (a === catList.length - 1) {
        myFavoriteCats += `and ${catList[i]}.`;
      } else {
        myFavoriteCats += `${catList[i]}, `;
    }
    
    i++;
} while(a < catList.length)



