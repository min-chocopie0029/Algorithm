const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
let [h, m] = inputData;

m -= 45;
if (m < 0) {
  h -= 1;
  m += 60;
  if (h == -1) h = 23;
}
console.log(h + ' ' + m);