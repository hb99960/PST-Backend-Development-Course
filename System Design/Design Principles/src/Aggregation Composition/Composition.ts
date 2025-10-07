class Engine{
    start():void{
        console.log("Engine started");
    }
}

class Car{
    engine:Engine;

    constructor(){
        this.engine = new Engine();
    }
}

const car = new Car();
car.engine.start();