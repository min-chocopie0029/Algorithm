function solution(board, moves) {
  let newBoard = [];
  let basket = [];
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i]) temp.push(board[j][i]);
    }
    newBoard.push(temp);
  }
 
  for (let i = 0; i < moves.length; i++) {
    let col = newBoard[moves[i]-1];
      
    if (col[0]) basket.push(col.shift());
    if (basket.length >= 2 && basket[basket.length-1] == basket[basket.length-2]) {
      basket = basket.slice(0, basket.length-2);
      result += 2;
    }
  }
  return result;
}