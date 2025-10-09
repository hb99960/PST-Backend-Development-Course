class User {
    constructor(public role: "admin" | "editor") {}
}

class Document {
    private state: string; // Stores current state

    constructor() {
        this.state = "draft"; // Default state
    }

    publish(currentUser: User): void {
        switch (this.state) {
            case "draft":
                console.log("Document sent for moderation.");
                this.state = "moderation";
                break;

            case "moderation":
                if (currentUser.role === "admin") {
                    console.log("Document published.");
                    this.state = "published";
                } else {
                    console.log("Only admin can publish the document.");
                }
                break;

            case "published":
                console.log("Document is already published.");
                break;

            default:
                console.log("Invalid state.");
        }
    }

    getState(): string {
        return this.state;
    }
}

// Testing the Document Workflow
const editor = new User("editor");
const admin = new User("admin");
const doc = new Document();

console.log(`Current State: ${doc.getState()}`); // "draft"
doc.publish(editor); // Output: "Document sent for moderation."
console.log(`Current State: ${doc.getState()}`); // "moderation"
doc.publish(editor); // Output: "Only admin can publish the document."
console.log(`Current State: ${doc.getState()}`); // "moderation"
doc.publish(admin); // Output: "Document published."
console.log(`Current State: ${doc.getState()}`); // "published"
doc.publish(admin); // Output: "Document is already published."