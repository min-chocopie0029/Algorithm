function solution(n, arr1, arr2) {
  let result = [];
  arr1 = arr1.map(v => {
    v = v.toString(2);
    return v.length < n ? '0'.repeat(n - v.length) + v : v;
  });
  arr2 = arr2.map(v => {
    v = v.toString(2);
    return v.length < n ? '0'.repeat(n - v.length) + v : v;
  });
  
  for (let i = 0; i < n; i++) {
    let temp = '';
    console.log(arr1[i], arr2[i]);
    for (let j = 0; j < n; j++) {
      if (+arr1[i][j] || +arr2[i][j]) temp += '#';
      else temp += ' ';
    }
    result.push(temp);
  }
  return result;
}