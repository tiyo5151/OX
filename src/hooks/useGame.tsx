import { useState } from 'react';

const useGame = () => {
  const [board,setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [turn, setTurn] = useState(1);
  const setOX = (x: number, y: number) => {
    console.log(x, y);
    if (board[y][x] !== 0) {
      return
    }
    if (turn === 1) {
      board[x][y] = 1;
      setTurn(2);
    }
    if (turn === 2) {
      board[y][x] = 2;
      setTurn(1);
    }
    setBoard(board);
  };
  return {
    board,
    setOX,
    turn,
  };
}

export default useGame;