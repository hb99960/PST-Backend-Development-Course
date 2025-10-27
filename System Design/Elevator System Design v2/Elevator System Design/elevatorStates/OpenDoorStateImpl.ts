import type { Elevator } from "../Elevator.js";
import type { IElevatorState } from "../IElevatorState.js";
import { CloseDoorStateImpl } from "./CloseDoorStateImpl.js";


export class OpenDoorStateImpl implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        console.log("Cannot move elevator while doors are open");
    }
    openDoor(elevator: Elevator): void {
        console.log("Doors are already open!");
    }
    closeDoor(elevator: Elevator): void {
        console.log("Doors are closing...");
        elevator.doorOpen = false;
        // Task
        elevator.state = new CloseDoorStateImpl();
    }
}