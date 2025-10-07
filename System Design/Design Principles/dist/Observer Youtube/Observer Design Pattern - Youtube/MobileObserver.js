export class MobileObserver {
    uniqueId;
    constructor(uniqueId) {
        this.uniqueId = uniqueId;
    }
    update(subject) {
        console.log(`Mobile : ${this.uniqueId} is notified by ${subject.name}`);
    }
}
