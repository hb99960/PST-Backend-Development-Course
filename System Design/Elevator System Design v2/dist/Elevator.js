import { Direction } from "./Direction.js";
import { CloseDoorStateImpl } from "./elevatorStates/CloseDoorStateImpl.js";
export class Elevator {
    currentFloor;
    direction;
    capacity;
    state;
    doorOpen;
    requestQueue = [];
    isProcessing = false;
    constructor() {
        this.currentFloor = 1;
        this.direction = Direction.IDLE;
        this.capacity = 0;
        this.doorOpen = false;
        this.state = new CloseDoorStateImpl();
    }
    enqueueFloor(floor) {
        if (!this.requestQueue.includes(floor)) {
            // Task:
            this.requestQueue.push(floor);
            this.processQueue();
        }
    }
    async processQueue() {
        if (this.isProcessing)
            return;
        this.isProcessing = true;
        while (this.requestQueue.length > 0) {
            const next = this.requestQueue.shift();
            if (next) {
                const floor = next;
                this.state.moveToFloor(this, floor);
                this.openDoor();
                await new Promise(res => setTimeout(res, 2000));
                this.closeDoor();
            }
        }
        this.isProcessing = false;
        this.direction = Direction.IDLE;
    }
    moveToFloor(floor) {
        // Task
        this.state.moveToFloor(this, floor);
    }
    openDoor() {
        // Task
        this.state.openDoor(this);
    }
    closeDoor() {
        // Task
        this.state.closeDoor(this);
    }
    updateDisplay() {
        console.log(`Current floor is ${this.currentFloor}, Direction: ${this.direction}`);
    }
}
