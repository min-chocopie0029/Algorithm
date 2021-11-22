function solution(lottos, win_nums) {
  let ranking = [6, 6, 5, 4, 3, 2, 1];
  let count = 0;
  
  lottos.forEach(v => {
    if (win_nums.includes(v)) count++
  });
  let unknown = lottos.filter(v => v == 0).length;
  
  return [ranking[count+unknown], ranking[count]];
}