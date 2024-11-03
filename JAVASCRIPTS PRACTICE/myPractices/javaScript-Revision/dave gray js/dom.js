const view2 = document.querySelector('#view2');
console.log(view2);

const sameDivs = document.querySelectorAll(".small");
console.log(sameDivs);

const evenDivs = document.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.border = "1px solid red"
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>My Page<h1> <p>This content to the right.<p>`;

console.log(navbar);
navbar.style.justifyContent = "space-evenly"


// Navigating the dom tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);


// removing elemennts or nodes

const wrapper = document.querySelector(".container");
wrapper.style.display = "none"

const secondCon = document.querySelector(".con");
secondCon.style.backgroundColor = "pink";
secondCon.style.maxWidth = "600px";
secondCon.style.display = "flex";
secondCon.style.flexDirection = "row";
secondCon.style.flexWrap = "wrap"
secondCon.style.margin = "10px"
secondCon.style.padding = "20px"
secondCon.style.alignItems = "center"
secondCon.style.justifyContent = "center"

const names = ['sam','joy','favour','school','alpha','sam','joy','favour','school','alpha','sam','joy','favour','school','alpha','sam','joy','favour','school','alpha']
const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = names[i];
    newDiv.style.background = "black";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "Center"
    newDiv.style.color = "white"
    parent.append(newDiv);
    
}
// createDiv(secondCon, 12)

for (i = 1; i < names.length; i++){
    createDiv(secondCon, i);
};


// adding eventlistners

const upper = document.querySelector("h1");

const doSomething = () => {
    alert("something done!")
}

upper.addEventListener("click", doSomething, false);

// removing events

upper.removeEventListener('click', doSomething, false)

// Using anonymous functions

upper.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
    
    
})






