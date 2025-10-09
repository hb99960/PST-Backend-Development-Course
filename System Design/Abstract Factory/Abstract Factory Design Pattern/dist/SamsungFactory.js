import { SamsungLaptop } from "./SamsungLaptop.js";
import { SamsungMobile } from "./SamsungMobile.js";
export class SamsungFactory {
    createLaptop() {
        return new SamsungLaptop("Galaxy Book 5", 150000);
    }
    createMobile() {
        return new SamsungMobile("S4 Ultra ", 80000);
    }
}
