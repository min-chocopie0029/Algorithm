function solution(s) {
  let i = 0;
  let arr = [];

  for(i =0 ; i<s.length;i++){
    arr.push(s[i]);

    if(arr[arr.length-1] == arr[arr.length-2]) {
      arr.pop();
      arr.pop();
    }
  }
  
  return arr == "" ? 1 : 0 ;
}