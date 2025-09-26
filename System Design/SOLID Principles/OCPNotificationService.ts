class NotificationService{

    notificationObj:INotification;
    constructor(notificationObj:INotification){
        this.notificationObj = notificationObj;
    }
    
    send(message:string){
        this.notificationObj.notify(message);
    }
}

// Abstraction: Abstract Class or Interface
// Interface : we don't have reusable code

interface INotification{
    notify(message:string):void;
}


class EmailNotificaiton implements INotification{
    notify(message:string): void {
        console.log(`Sending EMail with message ${message}`);
    }

}

class SMSNotification implements INotification{
    notify(message:string): void {
       console.log(`Sending SMS with message ${message}`);
    }

}

let email: EmailNotificaiton = new EmailNotificaiton();
let emailMessage:NotificationService = new NotificationService(email);
emailMessage.send("Hello from email");

