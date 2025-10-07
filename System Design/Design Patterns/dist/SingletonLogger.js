"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Logger.ts
class Logger {
    static instance;
    constructor() {
        // private constructor prevents direct instantiation
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
    error(message) {
        console.error(`[ERROR]: ${message}`);
    }
    warn(message) {
        console.warn(`[WARN]: ${message}`);
    }
}
// Usage example
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Application started.");
logger2.error("An unexpected error occurred.");
console.log("Same instance?", logger1 === logger2); // ✅ true
