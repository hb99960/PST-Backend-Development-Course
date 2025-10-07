"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Laptop {
    name;
    price;
    ssd;
    ram;
    gpu;
    constructor(name, price, ssd, ram, gpu) {
        this.name = name;
        this.price = price;
        this.ssd = ssd;
        this.ram = ram;
        this.gpu = gpu;
    }
    getDescription() {
        return `Product ${this.name}, with price ${this.price} - ${this.ssd}, ${this.ram}, ${this.gpu}`;
    }
}
class Mobile {
    name;
    price;
    camera;
    battery;
    constructor(name, price, camera, battery) {
        this.name = name;
        this.price = price;
        this.camera = camera;
        this.battery = battery;
    }
    getDescription() {
        return `Product ${this.name}, with price ${this.price} - ${this.camera}, ${this.battery}`;
    }
}
class ProductFactory {
    static createProduct(type, data) {
        if (type == "Laptop") {
            return new Laptop(data.name, data.price, data.ssd, data.ram, data.gpu);
        }
        else if (type == "Mobile") {
            return new Mobile(data.name, data.price, data.camera, data.battery);
        }
        else {
            throw new Error("Product type not valid");
        }
    }
}
const myLaptop = ProductFactory.createProduct("Laptop", { name: "Macbook Pro", price: 90000, ssd: "256GB", ram: "8GB", gpu: "RTX3050" });
const myMoobile = ProductFactory.createProduct("Mobile", { name: "iPhone 17", price: 125000, camera: "48MP", battery: "2400MAh" });
console.log(myLaptop.getDescription());
console.log(myMoobile.getDescription());
