import { AppleLaptop } from "./AppleLaptop.js";
import { AppleMobile } from "./AppleMobile.js";
import type { Product, ProductFactory } from "./types.js";

export class AppleFactory implements ProductFactory{
    createLaptop(): Product {
        return new AppleLaptop("Macbook M4", 900000);
    }
    createMobile(): Product {
       return new AppleMobile("iPhone 17", 1000000);
    }
}