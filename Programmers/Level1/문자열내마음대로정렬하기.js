function solution(strings, n) {
  strings.sort((a, b) => a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : (a>b)-(a<b));
  return strings;
}