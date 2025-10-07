"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static instance;
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
if (obj1 === obj2) {
    console.log("Both are same");
}
else {
    console.log("Both are different");
}
// Problem Statement: Implement a Singleton Logger in TypeScript
// Objective:
// Create a logging utility using the Singleton design pattern to ensure that only one instance of the logger 
// exists throughout the application. The logger should provide methods for logging different levels of messages: 
// standard logs, warnings, and errors.
// Requirements:
// 	1	Implement a Logger class with a private constructor to prevent direct instantiation.
// 	2	Provide a static method getInstance() that returns the single instance of the Logger.
// 	3	Implement the following instance methods:
// 	◦	log(message: string) – prints a standard log message.
// 	◦	warn(message: string) – prints a warning message.
// 	◦	error(message: string) – prints an error message.
// 	4	Demonstrate that multiple calls to getInstance() return the same logger instance.
// 
