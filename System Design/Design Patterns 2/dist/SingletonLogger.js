"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static instance;
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }
    log(message) {
        console.log(`[Log]: ${message}`);
    }
    error(message) {
        console.log(`[Error]: ${message}`);
    }
    warn(message) {
        console.log(`[Warn]: ${message}`);
    }
}
const obj1 = Logger.getInstance();
const obj2 = Logger.getInstance();
obj1.error("404! Sample Error");
if (obj1 === obj2) {
    console.log("Both are same");
}
else {
    console.log("Both are different");
}
