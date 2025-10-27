import { Direction } from "./Direction.js";


export class ElevatorRequest{
    currentFloor:number;
    destinationFloor: number;
    direction:Direction;

    constructor(currentFloor:number, destintationFloor: number){
        this.currentFloor = currentFloor;
        this.destinationFloor = destintationFloor;
        this.direction = this.destinationFloor > this.currentFloor ? Direction.UP : Direction.DOWN;
    }
}