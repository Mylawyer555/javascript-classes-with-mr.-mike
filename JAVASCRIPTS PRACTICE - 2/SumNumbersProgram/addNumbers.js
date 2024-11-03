
function sumNumber(){
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let outPut = document.getElementById("result");

    let sum = num1 + num2;
   outPut.innerHTML=sum;
   outPut.classList.add('msg')
    
}