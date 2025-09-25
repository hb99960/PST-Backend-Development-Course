class Duck{
    swim():string{
        return `I can swim`;
    }

    fly():string{
        return `default fly behaviour`;
    }
}

class IndianDuck extends Duck{
    fly():string{
        return `I can fly`;
    }
}

class AmericanDuck extends Duck{
    fly():string{
        return `I cannot fly`;
    }
}

let id:IndianDuck = new IndianDuck();
console.log("Indian Duck :", id.fly());

let ad:AmericanDuck = new AmericanDuck();
console.log("American Duck ", ad.fly());