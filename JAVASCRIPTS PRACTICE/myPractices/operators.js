// Calculating Discounted Price

//formular D = (L - S)/L * 100


let listPrice = 599;

let sellingPrice = 222;

let discount = ((listPrice - sellingPrice) / listPrice) * 100;

console.log(discount)

let displayDiscountedPercentage = Math.round(discount)

console.log(`The discounted percentage is ${displayDiscountedPercentage}% OFF`)

console.log(typeof displayDiscountedPercentage);

