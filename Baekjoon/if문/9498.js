const fs = require('fs');
const inputData = +fs.readFileSync('/dev/stdin').toString();

inputData >= 90 ? console.log('A') : inputData >= 80 ? console.log('B') : inputData >= 70 ? console.log('C') : inputData >= 60 ? console.log('D') : console.log('F');