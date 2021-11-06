function solution(n) {
  for (let i = 1; i**2 <= n; i++) if (i**2 == n) return (i+1) ** 2;
  return -1;
}