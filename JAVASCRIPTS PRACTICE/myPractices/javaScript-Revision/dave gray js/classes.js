
class pizza {
    constructor(size) {
       
        this.pizzaSize = size;
        this.crust = "Original";
       
        
    }
    getCrust () {
        return this.crust;
    }

    setCrust  (pizzaCrust) {
        this.crust = pizzaCrust;
    }

}



// const myPizza = new pizza("Beef", "Medium");
// myPizza.setCrust("fat")
// myPizza.pizztype = "Supreme"
// // console.log(myPizza.baking());
// // console.log(myPizza.getCrust());
// myPizza.setToppings('Prawns');
// myPizza.setToppings('Eggs');

// console.log(myPizza.getToppings());


class specialityPizza extends pizza {
    constructor(size) {
        super(size);
        this.type = "Jumbo"
    }

    slice() {
        return `This ${this.type} pizza with ${this.size} has 8 slices`
    }
}

const mySpecial = new specialityPizza("medium");
console.log(mySpecial.slice());
