interface Product {
    name:string;
    price:number;
    getDescription():string;
}

class Laptop implements Product{
    name: string;
    price: number;
    ssd:string;
    ram:string;
    gpu:string

    constructor(name:string, price:number, ssd:string, ram:string, gpu:string){
        this.name = name;
        this.price = price;
        this.ssd = ssd;
        this.ram = ram;
        this.gpu = gpu;
    }
    getDescription(): string {
       return `Laptop ${this.name}, Price ${this.price}, SSD: ${this.ssd}, RAM: ${this.ram}, GPU: ${this.gpu}`;
    }
}

class Mobile implements Product{
    name: string;
    price: number;

    camera:string;
    battery:string;

    constructor(name:string, price:number, camera:string, battery:string){
        this.name = name;
        this.price = price;
        this.camera = camera;
        this.battery = battery;
    }
    getDescription(): string {
        return `Mobile ${this.name}, Price ${this.price}, Camera ${this.camera}, Battery: ${this.battery}`;
    }
}

class ProductFactory {
    static createProduct(type:"Laptop" | "Mobile", data:any):Product{
        if(type === "Laptop"){
            return new Laptop(data.name, data.price, data.ssd, data.ram, data.gpu);
        } else if (type === "Mobile"){
            return new Mobile(data.name, data.price, data.camera, data.battery);
        } else{
            throw new Error("Invalid Product type");
        }
    }
}

const myLaptop = ProductFactory.createProduct("Laptop", {name:"Macbook Pro M4", price:145000, ssd:"256GB", ram:"8GB", gpu:"RTX 3050"});
const myMobile = ProductFactory.createProduct("Mobile", {name:"iPhone 17 pro", price:80000, camera:"48MP", battery:"4200mAh"});

console.log(myLaptop.getDescription());
console.log(myMobile.getDescription());