class Engine {
    start() {
        console.log("Car started");
    }
}
class Car {
    engine = new Engine();
}
const myCar = new Car();
myCar.engine.start();
export {};
