const fs = require("fs");

console.log("One");

fs.readFile("./contacts.txt", 'utf-8', () => {
  console.log("Two");

  process.nextTick(() => {
    console.log("Three");
  });

  setImmediate(() => {
    console.log("Four");
  });
});

console.log("Five");
