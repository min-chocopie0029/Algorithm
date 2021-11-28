function solution(N, stages) {
  let result = {};
  stages.sort((a, b) => a - b);
  
  for (let i = 1; i <= N; i++) {
    let loser = stages.filter(v => v == i).length;
    result[i] = loser / stages.length;
    stages = stages.filter(v => v != i);
  }
  
  return Object.keys(result).sort((a, b) => result[b] - result[a]).map(v => +v);
}