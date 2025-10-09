import { AppleLaptop } from "./AppleLaptop.js";
import { AppleMobile } from "./AppleMobile.js";
export class AppleFactory {
    createLaptop() {
        return new AppleLaptop("Macbook M4", 900000);
    }
    createMobile() {
        return new AppleMobile("iPhone 17", 1000000);
    }
}
