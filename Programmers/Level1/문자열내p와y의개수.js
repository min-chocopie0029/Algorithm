function solution(s) {
  let count = 0;

  for (let a of s.toLowerCase()) {
    if (a == 'p') count++;
    else if (a == 'y') count--;
  }
  
  return count == 0;  
}