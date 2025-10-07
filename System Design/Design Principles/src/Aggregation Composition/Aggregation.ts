class Engine{
    start():void{
        console.log("Engine started");
    }
}

class Car{
    engine:Engine;
    constructor(engine:Engine){
        this.engine = engine;
    }
}

const engine = new Engine();
const car = new Car(engine);
car.engine.start();