class Engine{
    start():void{
        console.log("Car started");
    }
}
class Car{
    engine:Engine = new Engine();
}

const myCar = new Car();
myCar.engine.start();