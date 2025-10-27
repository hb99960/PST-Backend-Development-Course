import { Direction } from "./Direction.js";
export class ClosestElevatorSelector {
    selectElevator(elevators, request) {
        let bestElevator = null;
        let minDistance = Infinity;
        for (const elevator of elevators) {
            // Task: 
            const distance = Math.abs(elevator.currentFloor - request.currentFloor);
            if (elevator.direction === request.direction || elevator.direction === Direction.IDLE) {
                if (distance < minDistance) {
                    minDistance = distance;
                    bestElevator = elevator;
                }
            }
        }
        return bestElevator;
    }
}
