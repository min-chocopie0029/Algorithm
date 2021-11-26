function solution(dartResult) {
  let bonus = ['S', 'D', 'T'];
  let result = [];

  for (let i = 0; i < dartResult.length; i++) {
    let bonusIdx = bonus.indexOf(dartResult[i]);
    if (bonusIdx != -1) {
      if (dartResult[i-2] == 1 && dartResult[i-1] == 0) {
        result.push(10 ** (bonusIdx + 1));
      } else {
        result.push(dartResult[i-1] ** (bonusIdx + 1));   
      }
    } 
      
    if (dartResult[i] == '*') {
      if (result.length >= 2) {
        result[result.length-2] = result[result.length-2] * 2;
      }
      result[result.length-1] = result[result.length-1] * 2;
      } else if (dartResult[i] == '#') {
        result[result.length-1] = -result[result.length-1];   
    }
  }
  console.log(result);
  return result.reduce((acc, cur) => acc + cur, 0);
}