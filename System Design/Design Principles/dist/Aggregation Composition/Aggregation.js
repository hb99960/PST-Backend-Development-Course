class Engine {
    start() {
        console.log("Engine started");
    }
}
class Car {
    engine;
    constructor(engine) {
        this.engine = engine;
    }
}
const engine = new Engine();
const car = new Car(engine);
car.engine.start();
export {};
