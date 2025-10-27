import type { Elevator } from "./Elevator.js";


export interface IElevatorState{
    moveToFloor(elevator: Elevator, floor:number):void;
    openDoor(elevator:Elevator): void;
    closeDoor(elevator:Elevator):void;
}