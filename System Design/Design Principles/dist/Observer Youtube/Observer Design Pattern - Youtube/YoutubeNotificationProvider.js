export class YoutubeNotificationProvider {
    observerList = [];
    name = "Youtube";
    // list 
    subscribe(observer) {
        // check
        const isExist = this.observerList.includes(observer);
        if (isExist) {
            console.log(`Observer : ${observer.uniqueId} already subscribed`);
            return;
        }
        console.log(`Observer : ${observer.uniqueId} subscribed`);
        this.observerList.push(observer);
        // push
    }
    unsubscribe(observer) {
        const index = this.observerList.indexOf(observer);
        if (index == -1) {
            console.log(`Observer ${observer.uniqueId} already unsubscribed`);
        }
        console.log(`Observer : ${observer.uniqueId} unsubscribed`);
        this.observerList.splice(index, 1);
    }
    notifyAll() {
        for (const observer of this.observerList) {
            observer.update(this);
        }
    }
}
