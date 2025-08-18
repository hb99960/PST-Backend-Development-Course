const fs = require("fs");

console.log("Script start");

setTimeout(() => {
  console.log("Timeout 1");
}, 10);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

fs.readFile("./contacts.txt", 'utf-8', () => {
  console.log("File finished reading");

  setTimeout(() => {
    console.log("Timeout inside readFile");
  }, 0);

  setImmediate(() => {
    console.log("Immediate inside readFile");
  });
});

console.log("Script end");
