"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigManager {
    static instance;
    config;
    constructor() {
        // Load config once (expensive operation)
        this.config = {
            apiUrl: "http://localhost",
            port: "3000",
        };
        console.log("Configuration loaded.");
    }
    static getInstance() {
        if (!this.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return this.instance;
    }
    getConfig() {
        return this.config;
    }
    // key means key is restricted to above keys
    get(key) {
        return this.config[key];
    }
    // key means key is restricted to above keys
    set(key, value) {
        this.config[key] = value;
    }
}
const config1 = ConfigManager.getInstance();
console.log(config1.getConfig());
console.log(config1.get("apiUrl"));
console.log(config1.get("port"));
