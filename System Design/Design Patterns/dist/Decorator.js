"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
}
class FarmHouse extends Pizza {
    getDescription() {
        return "Farmhouse";
    }
    getPrice() {
        return 100;
    }
}
class Margherita extends Pizza {
    getDescription() {
        return "Margherita";
    }
    getPrice() {
        return 200;
    }
}
// Pizza + Decorator = Pizza
class Decorators extends Pizza {
    pizza;
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
}
class Cheese extends Decorators {
    getDescription() {
        return this.pizza.getDescription() + " + Cheese";
    }
    getPrice() {
        return this.pizza.getPrice() + 20;
    }
}
class Olives extends Decorators {
    getDescription() {
        return this.pizza.getDescription() + " + Olives";
    }
    getPrice() {
        return this.pizza.getPrice() + 40;
    }
}
class Jalapenos extends Decorators {
    getDescription() {
        return this.pizza.getDescription() + " + Jalapenos";
    }
    getPrice() {
        return this.pizza.getPrice() + 60;
    }
}
// usage
const myPizza = new Olives(new Cheese(new FarmHouse()));
console.log(myPizza.getDescription());
console.log(myPizza.getPrice());
