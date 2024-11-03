
//A string is a sequence of Character

        let userName = "markmama";
console.log(userName.endsWith("ma"));
let result = userName.startsWith("ma");
console.log(result);

function isStateStart(){
    let state = prompt("Enter State").toLowerCase
    isStateStart = state.startsWith("a");
    if(!isStateStart){
        document.write(`<p style="color:red"> Opp! this application only for state that start with A.`);
    }
    else{
        document.write("Congrats!")
    }
}

    
let len = userName.length;
console.log(len);

Let school = "aptech";
console.log(school.toLocaleUpperCase());



// who wins the battle between uppecase and lowercase in any given String; if there is no winners return draw
// Mike => lower wins 
// LoVe => draw
// MArK => upper wins

// repeat the vowels in any string by the multiplier.
// love, 2 => loovee
// hate, 4



const upperCount = 0;
const lowerCount= 0;

function caseBattle(str){

    for (let i= 0; i < str.length; i++) {
        let element = str[i];
      if(element === element.toUppercase()){
        upperCount++;
      }else{
        lowerCount++;
      }
    }
    if (upperCount==lowerCount) {
        return "draw";
    }
    else if(upperCount < lowerCount){
        return "Lowercase wins";
    }
    else if(upperCount > lowerCount){
        return "Uppercase wins";
    }
}

console.log(caseBattle("Mike"));



function vowelRepeater(sta,mul){
    let vowel = "aeiou";
    let result = "";
    if(mul===0){
        return sta;
    }
    for(let i = 0; i<sta.length; i++){
        let elem = sta[i];
        if(vowel.includes(elem)){
         result += multiplier(elem,mul);
        }else{
            result += elem;
        }
    }

    return result; 
}
console.log(vowelRepeater("a",3));


let myFirstName = "Samuel\n\tabel";
console.log(myFirstName);