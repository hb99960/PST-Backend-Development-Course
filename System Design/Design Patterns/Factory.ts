interface Product {
    name:string;
    price:number;
    getDescription():string;
}

class Laptop implements Product{
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getDescription(): string {
       return `Laptop ${this.name}, Price ${this.price}`;
    }
}

class Mobile implements Product{
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price
    }
    getDescription(): string {
        return `Mobile ${this.name}, Price ${this.price}`;
    }
}

class ProductFactory {
    static createProduct(type:"Laptop" | "Mobile", name:string, price:number):Product{
        if(type === "Laptop"){
            return new Laptop(name, price);
        } else if (type === "Mobile"){
            return new Mobile(name, price);
        } else{
            throw new Error("Invalid Product type");
        }
    }
}

const myLaptop = ProductFactory.createProduct("Laptop", "Macbook Pro M4", 145000);
const myMobile = ProductFactory.createProduct("Mobile", "iPhone 17 pro", 80000);

console.log(myLaptop.getDescription());
console.log(myMobile.getDescription());