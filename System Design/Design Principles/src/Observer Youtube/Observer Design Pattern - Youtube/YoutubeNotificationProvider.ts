import type { ISubject, IObserver } from "./types.js";


export class YoutubeNotificationProvider implements ISubject{
    observerList : IObserver[] = [];
    name:string = "Youtube";

    // list 
    subscribe(observer:IObserver): void {
        // check
        const isExist = this.observerList.includes(observer);
        if(isExist){
            console.log(`Observer : ${observer.uniqueId} already subscribed`);
            return;
        }
        console.log(`Observer : ${observer.uniqueId} subscribed`);
        this.observerList.push(observer);
        // push
    }
    unsubscribe(observer:IObserver): void {
        const index = this.observerList.indexOf(observer);

        if(index == -1){
            console.log(`Observer ${observer.uniqueId} already unsubscribed`);
        }
        console.log(`Observer : ${observer.uniqueId} unsubscribed`);
        this.observerList.splice(index, 1);
    }

    notifyAll(): void {
        for (const observer of this.observerList){
            observer.update(this);
        }
    }
    
}