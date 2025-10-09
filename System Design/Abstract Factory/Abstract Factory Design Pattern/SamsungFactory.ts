import { SamsungLaptop } from "./SamsungLaptop.js";
import { SamsungMobile } from "./SamsungMobile.js";
import type { Product, ProductFactory } from "./types.js";

export class SamsungFactory implements ProductFactory{
    createLaptop(): Product {
        return new SamsungLaptop("Galaxy Book 5", 150000);
    }
    createMobile(): Product {
        return new SamsungMobile("S4 Ultra ", 80000);
    }
}