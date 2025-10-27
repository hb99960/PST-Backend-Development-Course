import { Direction } from "../Direction.js";
import { MovingStateImpl } from "./MovingStateImpl.js";
import { OpenDoorStateImpl } from "./OpenDoorStateImpl.js";
export class CloseDoorStateImpl {
    moveToFloor(elevator, floor) {
        // Task
        elevator.direction = elevator.currentFloor > floor ? Direction.DOWN : Direction.UP;
        // Tasks
        let distance = Math.abs(elevator.currentFloor - floor);
        let step = elevator.currentFloor > floor ? -1 : 1;
        for (let i = 1; i <= distance; i++) {
            elevator.currentFloor += step;
            console.log(`Elevator at floor : ${elevator.currentFloor}`);
            if (elevator.currentFloor === floor) {
                console.log(`Elevator has arrived at floor ${floor}`);
                elevator.state = new CloseDoorStateImpl();
                elevator.updateDisplay();
            }
        }
    }
    openDoor(elevator) {
        console.log(`Elevator door is opening....`);
        elevator.doorOpen = true;
        // Task
        elevator.state = new OpenDoorStateImpl();
    }
    closeDoor(elevator) {
        console.log(`Elevator Door is closed`);
        elevator.doorOpen = false;
    }
}
