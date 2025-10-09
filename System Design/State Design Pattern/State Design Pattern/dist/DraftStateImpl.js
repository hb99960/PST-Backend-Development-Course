import { ModerationStateImpl } from "./ModerationStateImpl.js";
export class DraftStateImpl {
    name;
    // name:string = "draft state";
    constructor(name = "draft state") {
        this.name = name;
    }
    publish(document, user) {
        console.log(`Document ${document.name} with state ${document.state.name} moved to Moderation State by user ${user.role}`);
        document.setState(new ModerationStateImpl());
    }
}
