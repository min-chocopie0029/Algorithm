function solution(answers) {
  let arrays = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  let count = [0, 0, 0];
  let result = [];
  
  for (let i = 0; i < arrays.length; i++) {
    answers.forEach((v, j) => {
      if (v == arrays[i][j % arrays[i].length]) count[i]++;
    })
  }
  
  for (let i in count) {
    if (count[i] == Math.max.apply(null, count)) result.push(+i + 1);
  }
  return result;
}