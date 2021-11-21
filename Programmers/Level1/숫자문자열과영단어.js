function solution(s) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  for (let i = 0; i < nums.length; i++) {
    while (s.includes(nums[i])) {
      s = s.replace(nums[i], i);   
    }
  }
  return +s;
}