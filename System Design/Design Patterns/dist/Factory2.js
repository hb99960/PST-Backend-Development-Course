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
        return `Laptop ${this.name}, Price ${this.price}, SSD: ${this.ssd}, RAM: ${this.ram}, GPU: ${this.gpu}`;
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
        return `Mobile ${this.name}, Price ${this.price}, Camera ${this.camera}, Battery: ${this.battery}`;
    }
}
class ProductFactory {
    static createProduct(type, data) {
        if (type === "Laptop") {
            return new Laptop(data.name, data.price, data.ssd, data.ram, data.gpu);
        }
        else if (type === "Mobile") {
            return new Mobile(data.name, data.price, data.camera, data.battery);
        }
        else {
            throw new Error("Invalid Product type");
        }
    }
}
const myLaptop = ProductFactory.createProduct("Laptop", { name: "Macbook Pro M4", price: 145000, ssd: "256GB", ram: "8GB", gpu: "RTX 3050" });
const myMobile = ProductFactory.createProduct("Mobile", { name: "iPhone 17 pro", price: 80000, camera: "48MP", battery: "4200mAh" });
console.log(myLaptop.getDescription());
console.log(myMobile.getDescription());
