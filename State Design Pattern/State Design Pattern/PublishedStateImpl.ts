import type { User } from "./User.js";
import type { DocumentState, Docx } from "./types.js";

export class PublishedStateImpl implements DocumentState{

    constructor(public name:string = "published state"){

    }

    publish(document: Docx, user: User): void {
        console.log(`Document ${document.name} already published`);
    }

}