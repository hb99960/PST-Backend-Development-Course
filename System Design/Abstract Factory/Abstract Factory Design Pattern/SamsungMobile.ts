import { BRAND, type Product } from "./types.js";

export class SamsungMobile implements Product{
    brand: BRAND = BRAND.SAMSUNG;
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    description(): string {
        return `Samsung ${this.name} with price ${this.price}`;
    }
}