export class EmailObserver {
    uniqueId;
    constructor(uniqueId) {
        this.uniqueId = uniqueId;
    }
    update(subject) {
        console.log(`Email : ${this.uniqueId} notified by ${subject.name}`);
    }
}
