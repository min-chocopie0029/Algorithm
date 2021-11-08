function solution(arr) {
  arr = arr.filter(v => v != Math.min(...arr));
  return arr.length == 0 ? [-1] : arr;
}