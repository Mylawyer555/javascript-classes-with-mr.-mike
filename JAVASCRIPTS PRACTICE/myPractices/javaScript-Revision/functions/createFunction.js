

// function displayMessage() {

//     const body = document.body;

   


//     const panel = document.createElement("div");
//     panel.setAttribute("class", "msgBox");
//     body.appendChild(panel);

//     const msg = document.createElement("p");
//     msg.textContent = "This is a message box";
//     panel.appendChild(msg);

//     const closeBtn = document.createElement("button");
//     closeBtn.textContent = "x";
//     panel.appendChild(closeBtn);

//     closeBtn.addEventListener("click", () =>
//       panel.parentNode.removeChild(panel)
//     );

// }
  
// displayMessage();


function squared(num) {
  return num * num;
}

console.log(squared(8));


function cubed(num) {
  return num * num * num;
}
console.log(cubed(7));

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

console.log(factorial(4));

function circumfrence(r) {
    let pi = 3.14;
    return `Circumference = ${2 * pi * r}`
}
  
console.log( circumfrence(4));
