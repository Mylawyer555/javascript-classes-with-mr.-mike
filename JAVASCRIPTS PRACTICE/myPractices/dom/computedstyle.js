const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");


const center = document.querySelector(".centa");

// console.log(window.getComputedStyle(red).backgroundColor);

const styleCom = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

// console.log(styleCom(yellow));


const magicColorChanger = (elem, color) => {
    return elem.addEventListener('click', () => {
        center.style.background = color;
    });
}

magicColorChanger(blue, styleCom(blue));
magicColorChanger(red, styleCom(red));
magicColorChanger(yellow, styleCom(yellow));
magicColorChanger(pink, styleCom(pink));
magicColorChanger(green, styleCom(green));
