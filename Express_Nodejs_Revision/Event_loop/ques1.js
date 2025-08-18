const fs = require("fs");

console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
});

fs.readFile("./contacts.txt", 'utf-8', () => {
  console.log("File read done");
});

process.nextTick(() => {
  console.log("NextTick");
});

console.log("End");
