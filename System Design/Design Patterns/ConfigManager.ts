type Config = {
    apiUrl:string;
    port:string;
}


class ConfigManager{
    private static instance:ConfigManager;
    private config:Config;

    private constructor() {
        // Load config once (expensive operation)
        this.config = {
          apiUrl: "http://localhost",
          port: "3000",
        };
        console.log("Configuration loaded.");
    }

    static getInstance():ConfigManager{
        if(!this.instance){
            ConfigManager.instance = new ConfigManager();
        }

        return this.instance;
    }

    getConfig():Config{
        return this.config;
    }

    // key means key is restricted to above keys
    get(key: keyof Config):string{
        return this.config[key];
    }

    // key means key is restricted to above keys
    set(key: keyof Config, value:string):void {
        this.config[key] = value;
    }
}

const config1 = ConfigManager.getInstance();
console.log(config1.getConfig())

console.log(config1.get("apiUrl"));
console.log(config1.get("port"));
