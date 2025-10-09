import { PublishedStateImpl } from "./PublishedStateImpl.js";
export class ModerationStateImpl {
    name;
    constructor(name = "moderation state") {
        this.name = name;
    }
    publish(document, user) {
        if (user.role === "scriptWriter") {
            console.log(`User ${user.role} not authoried to publish, only Producer can Publish Movie Scripts`);
        }
        else if (user.role === "actor") {
            console.log(`User ${user.role} not authoried to publish, only Producer can Publish Movie Scripts`);
        }
        else if (user.role === "producer") {
            document.setState(new PublishedStateImpl());
            console.log(`User ${user.role} Published Movie Script ${document.name}`);
        }
        else {
            throw new Error("Invalid role");
        }
    }
}
