"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Soldier {
    name;
    weapon;
    // Bug1 : Initialising member variables using con function
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
    display() {
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
