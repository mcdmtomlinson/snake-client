const connect = require('../snake-client/client');

console.log("Connecting ...");

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Disconnected from server 🙅")
    process.exit();
  }
};

setupInput();