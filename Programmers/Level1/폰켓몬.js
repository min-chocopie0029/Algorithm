function solution(nums) {
  let arr = Array.from(new Set(nums));
  
  return arr.length <= nums.length / 2 ? arr.length : nums.length / 2;
}