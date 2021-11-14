let answer = Array.from(Array(arr1.length), () => Array(arr1[0].length));
  for (let i in arr1) {
    for (let j in arr1[i]) {
      answer[i][j] = arr1[i][j] + arr2[i][j]
    }
  }
return answer;