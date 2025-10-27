import { CloseDoorStateImpl } from "./CloseDoorStateImpl.js";
export class OpenDoorStateImpl {
    moveToFloor(elevator, floor) {
        console.log("Cannot move elevator while doors are open");
    }
    openDoor(elevator) {
        console.log("Doors are already open!");
    }
    closeDoor(elevator) {
        console.log("Doors are closing...");
        elevator.doorOpen = false;
        // Task
        elevator.state = new CloseDoorStateImpl();
    }
}
