// IDuck is abstracted
interface IDuck{
    fly():string;
    sound():string;
    swim():string;
}


// concrete : Implmn done => functions defnn
class IndianDuck implements IDuck{
    fly(): string {
        return `Indian Duck can fly with 5kmph`
    }
    sound(): string {
        return `Indian Quack!! Indian Quack!!`
    }
    swim(): string {
        return `Indian style swimming`   
    }
}

let id:IndianDuck = new IndianDuck();
console.log(id.fly());
console.log(id.sound());
console.log(id.swim());

// let intefaceObject: IDuck = new IDuck();

class RubberDuck implements IDuck{
    fly(): string {
        throw new Error("Method not implemented.");
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    swim(): string {
        throw new Error("Method not implemented.");
    }
}


