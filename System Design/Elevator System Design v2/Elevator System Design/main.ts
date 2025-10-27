import { ElevatorManager } from "./ElevatorManager.js";
import { ElevatorRequest } from "./ElevatorRequest.js";

const elevatorManager = new ElevatorManager(50, 4);
const request1 = new ElevatorRequest(30, 1);
// Task:
elevatorManager.requestElevator(request1);


// Total 14 tasks
// Expected Output is attached with source code