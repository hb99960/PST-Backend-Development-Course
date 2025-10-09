import { DraftStateImpl } from "./DraftStateImpl.js";
import type { User } from "./User.js";
import type { DocumentState, Docx } from "./types.js";

export class MovieScript implements Docx{
    name: string;
    state: DocumentState;

    constructor(name:string){
        this.name = name;
        this.state = new DraftStateImpl();
    }

    setState(state:DocumentState){
        this.state = state;
    }

    publish(user: User): void {
        this.state.publish(this, user);
    }   
}