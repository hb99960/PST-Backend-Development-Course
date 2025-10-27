import { ClosestElevatorSelector } from "./ClosestElevatorSelector.js";
import { Elevator } from "./Elevator.js";
export class ElevatorManager {
    // best elevator
    numFloors;
    elevators;
    selector;
    constructor(numFloors, numElevators) {
        this.numFloors = numFloors;
        this.selector = new ClosestElevatorSelector();
        this.elevators = [];
        // Task: 
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator());
        }
    }
    updateDisplay() {
        for (const elevator of this.elevators) {
            elevator.updateDisplay();
        }
    }
    requestElevator(request) {
        // Task: 
        let elevator = this.selector.selectElevator(this.elevators, request);
        if (elevator) {
            // pick up
            // Task
            elevator.enqueueFloor(request.currentFloor);
            // drop off
            elevator.enqueueFloor(request.destinationFloor);
        }
        else {
            console.log(`No elevator is available`);
        }
        return elevator;
    }
}
