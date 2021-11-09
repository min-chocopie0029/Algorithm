function solution(n, m) {
  let gcpNum = gcp(Math.min(n, m), Math.max(n, m) % Math.min(n, m));
  
  return [gcpNum, parseInt(n * m / gcpNum)];
}

function gcp(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  
  if (m == 0) return n;
  else return gcp(min, max % min);
}