let productCont = document.getElementById('productDiv')

let product = JSON.parse(localStorage.getItem('products')) || []

product.forEach(products => {
    const prodDiv = document.createElement('div') 
    
    const prodImg = document.createElement('div')
    prodImg.style.backgroundImage = `${products.image}`
    
    const prodName = document.createElement('div');
    prodName.innerHTML = `<p>${product.name}<p/>`

    productCont.appendChild(prodDiv);
});