// Parent class
class Duck{
    fly():string{
        return `Parent Duck is flying`;
    }
}

/// childclass
class ChildDuck1 extends Duck{
    fly():string{
        return `Child 1 is flying`;
    }
}


// childclass

class ChildDuck2 extends Duck{
    fly():string{
        return `Child 2 does not fly`;
    }
}

function makeDuckFly(duck:Duck):string {
    return duck.fly();
}

// create objects of all three classes
let p:Duck = new Duck();
let c1:ChildDuck1 = new ChildDuck1();
let c2:ChildDuck2 = new ChildDuck2();


console.log(makeDuckFly(p))
console.log(makeDuckFly(c1))
console.log(makeDuckFly(c2))

