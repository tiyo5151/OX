import { useState } from 'react';
import { lines } from '../constants';

const useGame = () => {
  const [board, setBoard] = useState<(number | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const newBoard = structuredClone(board);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState<number | null>(null);

  const checkWinner = (newBoard: (number | null)[][]) => {
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        newBoard[a.y][a.x] !== null &&
        newBoard[a.y][a.x] === newBoard[b.y][b.x] &&
        newBoard[a.y][a.x] === newBoard[c.y][c.x]
      ) {
        return setWinner(newBoard[a.y][a.x]);
      }
      if (newBoard.every((row) => row.every((cell) => cell !== null))) {
        return setWinner(3);
      }
    }
  };

  const setOX = (x: number, y: number) => {
    console.log(x, y);
    if (newBoard[y][x] !== null || winner !== null) {
      return;
    }
    //1: ○, 2: ×
    if (turn === 1) {
      newBoard[y][x] = 1;
    }
    if (turn === 2) {
      newBoard[y][x] = 2;
    }
    checkWinner(newBoard);
    setBoard(newBoard);
    setTurn(turn === 1 ? 2 : 1);
  };

  console.log(winner);
  console.log(newBoard);
  return {
    board,
    setOX,
    turn,
    winner,
  };
};

export default useGame;
