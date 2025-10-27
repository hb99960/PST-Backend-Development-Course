import { Direction } from "./Direction.js";
export class ElevatorRequest {
    currentFloor;
    destinationFloor;
    direction;
    constructor(currentFloor, destintationFloor) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destintationFloor;
        this.direction = this.destinationFloor > this.currentFloor ? Direction.UP : Direction.DOWN;
    }
}
