//Multiply the vowels in a string by a certain integer n and return  e.g 'java', 3  Output: 'jaaavaaa'

function multiplier(char, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += char;
    }
    return result;
}

 console.log(multiplier('a', 3));


// console.log(multiplier('b', 5));

function isVowelMultiplier(str, mul) {
    let vowel = 'aeiou';
    let newString = '';

    if (mul === 0) {
        return str
    }

    for (let i = 0; i < str.length; i++){
        let elem = str[i];

        if (vowel.includes(elem)) {
            newString += multiplier(elem, mul);
        } else {
            newString += elem;
        }
    }
    return newString
}

console.log(isVowelMultiplier('java', 3));
