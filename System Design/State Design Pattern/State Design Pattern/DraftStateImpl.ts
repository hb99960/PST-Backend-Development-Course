import { ModerationStateImpl } from "./ModerationStateImpl.js";
import type { User } from "./User.js";
import type { DocumentState, Docx } from "./types.js";


export class DraftStateImpl implements DocumentState{
    // name:string = "draft state";

    constructor(public name:string = "draft state"){

    }

    publish(document: Docx, user: User): void {
        console.log(`Document ${document.name} with state ${document.state.name} moved to Moderation State by user ${user.role}`);
        document.setState(new ModerationStateImpl());
    }

}