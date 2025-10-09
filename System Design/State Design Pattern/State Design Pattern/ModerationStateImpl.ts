import { PublishedStateImpl } from "./PublishedStateImpl.js";
import type { User } from "./User.js";
import type { DocumentState, Docx } from "./types.js";

export class ModerationStateImpl implements DocumentState{

    constructor(public name:string = "moderation state"){

    }
    publish(document: Docx, user: User): void {

        if(user.role === "scriptWriter"){
            console.log(`User ${user.role} not authoried to publish, only Producer can Publish Movie Scripts`);
        } else if (user.role === "actor"){
            console.log(`User ${user.role} not authoried to publish, only Producer can Publish Movie Scripts`);
        } else if(user.role === "producer"){
            document.setState(new PublishedStateImpl())
            console.log(`User ${user.role} Published Movie Script ${document.name}`);
        } else {
            throw new Error("Invalid role");
        }
    }

}