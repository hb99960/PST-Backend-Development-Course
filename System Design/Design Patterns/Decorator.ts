abstract class Pizza{
    abstract getDescription():string;
    abstract getPrice():number;
}

class FarmHouse extends Pizza{
    getDescription(): string {
        return "Farmhouse";
    }
    getPrice(): number {
        return 100;
    }
}

class Margherita extends Pizza{
    getDescription(): string {
        return "Margherita";
    }
    getPrice(): number {
        return 200;
    }  
}

// Pizza + Decorator = Pizza
abstract class Decorators extends Pizza{
    pizza:Pizza;
    constructor(pizza:Pizza){
        super();
        this.pizza = pizza;
    }
}

class Cheese extends Decorators{
    getDescription(): string {
        return this.pizza.getDescription() + " + Cheese";
    }
    getPrice(): number {
        return this.pizza.getPrice() + 20;
    }
}

class Olives extends Decorators{
    getDescription(): string {
        return this.pizza.getDescription() + " + Olives";
    }
    getPrice(): number {
        return this.pizza.getPrice() + 40;
    }
}

class Jalapenos extends Decorators{
    getDescription(): string {
        return this.pizza.getDescription() + " + Jalapenos";
    }
    getPrice(): number {
        return this.pizza.getPrice() + 60;
    }
}

// usage

const myPizza = new Olives(new Cheese(new FarmHouse()));
console.log(myPizza.getDescription());
console.log(myPizza.getPrice());