import type { Observer, Subject } from "./WeatherStationTypes.js";

export class SmartphoneObserver implements Observer{
    update(subject: Subject): void {
        console.log(`Smartphone observer has been notified by ${subject.name}`);
    }

}