setTimeout(() => {
  console.log("Timer A");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise then");
});

process.nextTick(() => {
  console.log("NextTick A");
});

console.log("Main");
