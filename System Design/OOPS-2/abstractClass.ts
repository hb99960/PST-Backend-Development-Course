abstract class Duck{

    swim():string{
        return "I can swim";
    }

    abstract fly():string;
    abstract sound():string;
}

class IndianDuck extends Duck{
    fly(): string {
        return `I can fly`;
    }
    sound(): string {
        return `Indian Quack!!`;
    }
}

let i:IndianDuck = new IndianDuck();
console.log(i.fly())
console.log(i.sound())
console.log(i.swim());