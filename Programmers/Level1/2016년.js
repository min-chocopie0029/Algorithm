function solution(a, b) {
  let dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
  let answer = new Date(2016, a-1, b);
  return dayOfTheWeek[answer.getDay()];
}