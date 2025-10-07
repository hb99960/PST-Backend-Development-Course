"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Laptop {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `Laptop ${this.name}, Price ${this.price}`;
    }
}
class Mobile {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        return `Mobile ${this.name}, Price ${this.price}`;
    }
}
class ProductFactory {
    static createProduct(type, name, price) {
        if (type === "Laptop") {
            return new Laptop(name, price);
        }
        else if (type === "Mobile") {
            return new Mobile(name, price);
        }
        else {
            throw new Error("Invalid Product type");
        }
    }
}
const myLaptop = ProductFactory.createProduct("Laptop", "Macbook Pro M4", 145000);
const myMobile = ProductFactory.createProduct("Mobile", "iPhone 17 pro", 80000);
console.log(myLaptop.getDescription());
console.log(myMobile.getDescription());
