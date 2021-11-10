function solution(x) {
  return x % String(x).split("").reduce((add, cur) => +add + +cur) == 0;
}