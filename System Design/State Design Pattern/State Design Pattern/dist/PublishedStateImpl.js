export class PublishedStateImpl {
    name;
    constructor(name = "published state") {
        this.name = name;
    }
    publish(document, user) {
        console.log(`Document ${document.name} already published`);
    }
}
