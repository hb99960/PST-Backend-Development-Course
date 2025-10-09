import { DraftStateImpl } from "./DraftStateImpl.js";
export class MovieScript {
    name;
    state;
    constructor(name) {
        this.name = name;
        this.state = new DraftStateImpl();
    }
    setState(state) {
        this.state = state;
    }
    publish(user) {
        this.state.publish(this, user);
    }
}
