const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const [A, B] = inputData;

A > B ? console.log('>') : A < B ? console.log('<') : console.log('==');