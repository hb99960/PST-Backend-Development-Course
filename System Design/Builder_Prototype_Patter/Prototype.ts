class Soldier{
    name:string;
    weapon:string;

    // Bug1 : Initialising member variables using con function
    constructor(name:string, weapon:string){
        this.name = name;
        this.weapon = weapon;
    }

    clone():this{
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    display():void{
        console.log(`Soldier ${this.name} has ${this.weapon} weapon`);
    }
}

let bot1 = new Soldier("PSTBot1", "AKM");
bot1.display();

let clonedBot = bot1.clone();
clonedBot.display();
clonedBot.name = "clonedBot1";
clonedBot.weapon = "UZI";
clonedBot.display();