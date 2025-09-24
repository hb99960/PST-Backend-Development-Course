// Parent
class Shape{
    name:string;
    
    constructor(name:string){
        this.name = name;
    }  
}

//child
class Circle extends Shape{
    
    radius:number;

    constructor(name:string, radius:number){
        super(name);
        // this.name = name;
        this.radius = radius;
    }

    area():string{
        return `Shape ${this.name} with radius ${this.radius} has area ${this.radius * this.radius * 3.14}`;
    }
}

// child
class Square extends Shape{
    side:number;

    constructor(name:string, side:number){
        super(name);

        this.side = side;
    }
    
    area():string{
        return `Shape ${this.name} with length ${this.side} has area ${this.side * this.side}`;
    }
}


let c:Circle = new Circle("myCircle", 2);
console.log(c.name);
console.log(c.area())

let sq:Square = new Square("mySquare", 2);
console.log(sq.name);
console.log(sq.area());
