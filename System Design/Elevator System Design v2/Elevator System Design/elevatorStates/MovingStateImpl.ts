import type { Elevator } from "../Elevator.js";
import type { IElevatorState } from "../IElevatorState.js";


export class MovingStateImpl implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        console.log(`Elevator is already moving`);
    }
    openDoor(elevator: Elevator): void {
        console.log(`Cannot open the door while moving`);
    }
    closeDoor(elevator: Elevator): void {
        console.log(`Doors are already closed`);
    }
}