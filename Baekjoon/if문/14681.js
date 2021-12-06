const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputData = [];
rl.on('line', (line) => {
  inputData.push(+line);
}).on('close', () => {
  const [x, y] = inputData;

  if (x > 0) {
    if (y > 0) console.log(1);
    else console.log(4);
  } else {
    if (y > 0) console.log(2);
    else console.log(3);
  }

  process.exit();
})