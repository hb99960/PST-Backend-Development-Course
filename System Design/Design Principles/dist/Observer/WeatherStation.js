import { Payment } from "../Payment/Payment.js";
export class WeatherStation {
    name = "PST Station";
    observers = [];
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log(`Observer already exist`);
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return console.log("Observer does not exist");
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
// 30 = Payment
// 30 = classDaigram + Aggregation and Composition
// 30 = Observer Design Pattern : Problem and Solution, Pub-SubmitEvent, Internal Communication, 
// 30 = Practice Youtube Notification
// 30 = Decorator Design CanvasPattern
// 30 = 
// 30 = 
