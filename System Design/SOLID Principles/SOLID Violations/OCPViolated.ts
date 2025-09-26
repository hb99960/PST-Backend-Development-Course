class NotificationService {
    send(type: string, message: string): void {
      if (type === "email") {
        console.log(`Sending EMAIL: ${message}`);
      } else if (type === "sms") {
        console.log(`Sending SMS: ${message}`);
      }
    }
}
  