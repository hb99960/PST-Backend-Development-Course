export enum BRAND{
    APPLE = "APPLE",
    SAMSUNG = "SAMSUNG"
}

export interface Product{
    brand: BRAND,
    name:string,
    price:number,
    description():string;
}

export interface ProductFactory{
    createLaptop():Product;
    createMobile():Product;
}

