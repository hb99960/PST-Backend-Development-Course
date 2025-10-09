import { AppleLaptop } from "./AppleLaptop.js";
import { FactoryProvider } from "./FactoryProvider.js";
import { BRAND } from "./types.js";

const appleFactory = FactoryProvider.getFactory(BRAND.APPLE);
const macbook = appleFactory.createLaptop();
const iPhone = appleFactory.createMobile();

console.log(macbook.description());
console.log(iPhone.description());

