import { Direction } from "./Direction.js";
import type { Elevator } from "./Elevator.js";
import type { ElevatorRequest } from "./ElevatorRequest.js";
import type { IElevatorSelector } from "./IElevatorSelector.js";


export class ClosestElevatorSelector implements IElevatorSelector{
    selectElevator(elevators: Elevator[], request: ElevatorRequest): Elevator | null {
       
        let bestElevator: Elevator | null = null;
        let minDistance = Infinity;

        for( const elevator of elevators){
            // Task: 
            const distance = Math.abs(elevator.currentFloor - request.currentFloor);

            if (elevator.direction === request.direction || elevator.direction === Direction.IDLE){
                if(distance < minDistance){
                    minDistance = distance;
                    bestElevator = elevator;
                }
            }
        }

        return bestElevator;
    }

}