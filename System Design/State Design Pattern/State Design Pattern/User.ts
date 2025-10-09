export class User{
    role;
    constructor(role: "scriptWriter" | "actor" | "producer"){
        this.role = role;
    }
}