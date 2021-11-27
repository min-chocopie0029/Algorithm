function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    let index = reserve.indexOf(lost[i]);
    if (index != -1) {
      reserve.splice(index, 1);
      lost.splice(i, 1);
      i--;
    }
  }
    
  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if ([lost[j]-1, lost[j]+1].includes(reserve[i])) {
        reserve.splice(i, 1);
        lost.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  
  return n - lost.length;
}