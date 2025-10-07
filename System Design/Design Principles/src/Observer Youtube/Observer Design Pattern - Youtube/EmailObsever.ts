import type { IObserver, ISubject } from "./types.js";


export class EmailObserver implements IObserver{
    uniqueId: string;

    constructor(uniqueId:string){
        this.uniqueId = uniqueId;
    }
    update(subject:ISubject): void {
        console.log(`Email : ${this.uniqueId} notified by ${subject.name}`);
    }

}