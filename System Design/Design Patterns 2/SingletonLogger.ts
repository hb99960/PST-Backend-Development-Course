class Logger{
    private static instance:Logger;
    private constructor(){

    }

    static getInstance():Logger{
        if(!this.instance){
            this.instance = new Logger();
        }

        return this.instance;
    }

    log(message:string):void{
        console.log(`[Log]: ${message}`);
    }

    error(message:string):void{
        console.log(`[Error]: ${message}`);
    }
    warn(message:string):void{
        console.log(`[Warn]: ${message}`);
    }
}

const obj1 = Logger.getInstance();
const obj2 = Logger.getInstance();

obj1.error("404! Sample Error");

if(obj1 === obj2){
    console.log("Both are same");
} else {
    console.log("Both are different");
}