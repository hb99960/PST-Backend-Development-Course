import type { IObserver, ISubject } from "./types.js";


export class MobileObserver implements IObserver{
    uniqueId: string;
    constructor(uniqueId:string){
        this.uniqueId = uniqueId;
    }
    update(subject:ISubject): void {
        console.log(`Mobile : ${this.uniqueId} is notified by ${subject.name}`);
    }
}