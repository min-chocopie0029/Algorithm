const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

const [A, B] = inputData;
const b = B.toString().split('').map(v => +v);

console.log(A * b[2]);
console.log(A * b[1]);
console.log(A * b[0]);
console.log(A * B);