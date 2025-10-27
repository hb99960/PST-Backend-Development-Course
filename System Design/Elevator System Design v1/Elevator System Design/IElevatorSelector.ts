import type { Elevator } from "./Elevator.js";
import type { ElevatorRequest } from "./ElevatorRequest.js";


export interface IElevatorSelector{
    selectElevator(elevator: Elevator[], request: ElevatorRequest): Elevator | null;
}