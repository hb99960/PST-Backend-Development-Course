import { MovieScript } from "./MovieScript.js";
import { User } from "./User.js";

const PSTCampusTour = new MovieScript("PSTCampusTour");

const Shridhar = new User("scriptWriter");
const Rohit = new User("actor");
const Arpit = new User("producer");

console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Shridhar);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Shridhar);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Rohit);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Arpit);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Shridhar);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Shridhar);
console.log(`State: ${PSTCampusTour.state.name}`);
PSTCampusTour.publish(Rohit);
console.log(`State: ${PSTCampusTour.state.name}`);
