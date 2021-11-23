function solution(numbers, hand) {
  let keypad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2]
  };
  let location_L = '*';
  let location_R = '#';
  let dist_L = 0;
  let dist_R = 0;
  let result = '';
  
  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      result += 'L';
      location_L = numbers[i];
    } else if ([3, 6, 9].includes(numbers[i])) {
      result += 'R';
      location_R = numbers[i];
    } else {
      dist_L = Math.abs(keypad[numbers[i]][0] - keypad[location_L][0]) +
        Math.abs(keypad[numbers[i]][1] - keypad[location_L][1]);
      dist_R = Math.abs(keypad[numbers[i]][0] - keypad[location_R][0]) +
        Math.abs(keypad[numbers[i]][1] - keypad[location_R][1]);
        
      if (dist_L == dist_R) hand == 'right' ? result += 'R' : result += 'L';
      else dist_R < dist_L ? result += 'R' : result += 'L';
        
      result[result.length-1] == 'R' ? location_R = numbers[i] : location_L = numbers[i];
    }
  }
  
  return result;
}