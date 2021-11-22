function solution(new_id) {
  let result = '';
  
  result = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/[.]{2,}/g, '.').replace(/^[.]|[.]$/g, '');
  result = (!result) ? 'a' : (result.length >= 16) ? result.slice(0, 15).replace(/[.]$/, '') : result;
  return (result.length <= 2) ? result + result.slice(-1).repeat(3-result.length): result;
}