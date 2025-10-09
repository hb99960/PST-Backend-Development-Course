import { AppleFactory } from "./AppleFactory.js";
import { SamsungFactory } from "./SamsungFactory.js";
import { BRAND } from "./types.js";
export class FactoryProvider {
    static getFactory(brand) {
        switch (brand) {
            case BRAND.APPLE:
                return new AppleFactory();
            case BRAND.SAMSUNG:
                return new SamsungFactory();
            default:
                throw new Error("Unsupported Factory Brand");
        }
    }
}
