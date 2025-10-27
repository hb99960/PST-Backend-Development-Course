export class MovingStateImpl {
    moveToFloor(elevator, floor) {
        console.log(`Elevator is already moving`);
    }
    openDoor(elevator) {
        console.log(`Cannot open the door while moving`);
    }
    closeDoor(elevator) {
        console.log(`Doors are already closed`);
    }
}
