import { BRAND, type Product } from "./types.js";

export class AppleLaptop implements Product{
    brand: BRAND = BRAND.APPLE;
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    description(): string {
        return `Apple ${this.name} with price: ${this.price}`;
    }

}