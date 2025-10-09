import type { User } from "./User.js";

export interface Docx{
    name:string;
    state: DocumentState;
    publish(user: User):void;
    setState(state:DocumentState):void;
}

export interface DocumentState{
    name:string;
    publish(document:Docx, user:User):void;
}