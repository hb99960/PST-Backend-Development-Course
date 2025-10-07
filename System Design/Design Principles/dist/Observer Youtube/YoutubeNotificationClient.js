// Subject
import { EmailObserver } from "./Observer Design Pattern - Youtube/EmailObsever.js";
import { MobileObserver } from "./Observer Design Pattern - Youtube/MobileObserver.js";
import { YoutubeNotificationProvider } from "./Observer Design Pattern - Youtube/YoutubeNotificationProvider.js";
const YTNotificationProvider = new YoutubeNotificationProvider();
//Observers
const masaiEmail = new EmailObserver("masai@masaischool.com");
const masaiMobile = new MobileObserver("9999988888");
const myEmail = new EmailObserver("harshit.batra@masaischool.com");
const myMobile = new MobileObserver("9999977777");
YTNotificationProvider.subscribe(masaiEmail);
YTNotificationProvider.subscribe(masaiMobile);
YTNotificationProvider.subscribe(myEmail);
YTNotificationProvider.subscribe(myMobile);
YTNotificationProvider.notifyAll();
YTNotificationProvider.unsubscribe(masaiMobile);
YTNotificationProvider.unsubscribe(myMobile);
YTNotificationProvider.notifyAll();
