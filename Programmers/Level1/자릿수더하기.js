function solution(n) {
  let sum = 0;
  String(n).split("").forEach(v => sum += +v);
  return sum;
}