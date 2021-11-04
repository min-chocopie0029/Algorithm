function solution(n) {
  let result = '수박'.repeat(n/2);
  return n % 2 == 0 ? result : result + '수';
}