const buttons = document.querySelectorAll('button');

buttons.forEach(mybutton => {
    mybutton.addEventListener('click', () =>{
        const faq = mybutton.nextElementSibling;
        const icon = mybutton.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle("rotate");
    })
})