function solution(s) {
  let array = [];
  
  for (let i = 0; i < s.length; i++) {
    if (array.length == 0 || s[i] != array[array.length-1]) array.push(s[i]);
    else array.pop();
  }
  
  return array.length ? 0 : 1;
}