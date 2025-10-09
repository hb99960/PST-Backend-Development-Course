import { BRAND } from "./types.js";
export class SamsungLaptop {
    brand = BRAND.SAMSUNG;
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    description() {
        return `Samsung ${this.name} with price: ${this.price}`;
    }
}
