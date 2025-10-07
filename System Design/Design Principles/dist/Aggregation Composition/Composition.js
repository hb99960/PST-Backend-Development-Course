class Engine {
    start() {
        console.log("Engine started");
    }
}
class Car {
    engine;
    constructor() {
        this.engine = new Engine();
    }
}
const car = new Car();
car.engine.start();
export {};
