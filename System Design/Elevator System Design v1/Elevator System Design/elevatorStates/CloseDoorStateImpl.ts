import { Direction } from "../Direction.js";
import type { Elevator } from "../Elevator.js";
import type { IElevatorState } from "../IElevatorState.js";
import { MovingStateImpl } from "./MovingStateImpl.js";
import { OpenDoorStateImpl } from "./OpenDoorStateImpl.js";



export class CloseDoorStateImpl implements IElevatorState{
    moveToFloor(elevator: Elevator, floor: number): void {
        // Task
        // elevator.direction = 

        // Tasks
        // let distance = ;
        // let step = ;

        for(let i=1; i<=distance; i++){
            elevator.currentFloor += step;
            console.log(`Elevator at floor : ${elevator.currentFloor}`);

            if(elevator.currentFloor === floor){
                console.log(`Elevator has arrived at floor ${floor}`);
                elevator.state = new CloseDoorStateImpl();
                elevator.updateDisplay();
            }
        }
    }

    openDoor(elevator: Elevator): void {
        console.log(`Elevator door is opening....`);
        elevator.doorOpen = true;
        // Task
       
    }

    closeDoor(elevator: Elevator): void {
        console.log(`Elevator Door is closed`);
        elevator.doorOpen = false;
    }
}