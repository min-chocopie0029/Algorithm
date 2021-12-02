function solution(n) {
  let result = [];
  
  for (let i = 0; i <= n; i++) {
    if (i == 0) result.push(0)
    else if (i == 1) result.push(1)
    else {
      let sum = result[i-2] + result[i-1];
      result.push(sum % 1234567)
    }
  }
  return result[n] % 1234567;
}