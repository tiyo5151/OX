import { useCallback, useState } from 'react';
import { lines } from '../constants';
import type { BoardState, History, Winner } from '../types/useGame';

const useGame = () => {
  // const [board, setBoard] = useState<(number | null)[][]>([
  //   [null, null, null],
  //   [null, null, null],
  //   [null, null, null],
  // ]);
  // const newBoard = structuredClone(board);
  // const [turn, setTurn] = useState(1);
  const [history, setHistory] = useState<History[]>([
    {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      turn: 1,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const currentBoard = history[currentStep].board;
  const currentTurn = history[currentStep].turn;
  const [winner, setWinner] = useState<Winner>(null);

  const checkWinner = useCallback((newBoard: BoardState) => {
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        newBoard[a.y][a.x] !== null &&
        newBoard[a.y][a.x] === newBoard[b.y][b.x] &&
        newBoard[a.y][a.x] === newBoard[c.y][c.x]
      ) {
        return newBoard[a.y][a.x];
      }
    }
    if (newBoard.every((row) => row.every((cell) => cell !== null))) {
      return 3; // Draw
    }
    return null;
  }, []);

  const setOX = useCallback(
    (x: number, y: number) => {
      if (winner !== null || currentBoard[y][x] !== null) {
        return;
      }

      const newBoard = currentBoard.map((row) => [...row]);
      newBoard[y][x] = currentTurn;

      const newWinner = checkWinner(newBoard);
      const newTurn = currentTurn === 1 ? 2 : 1;

      const newHistory = history.slice(0, currentStep + 1).concat({
        board: newBoard,
        turn: newTurn,
      });

      setHistory(newHistory);
      setCurrentStep(newHistory.length - 1);

      if (newWinner !== null) {
        setWinner(newWinner);
      }
    },
    [currentBoard, currentTurn, currentStep, history, winner, checkWinner],
  );

  const jumpTo = (step: number) => {
    setCurrentStep(step);
    setWinner(checkWinner(history[step].board));
  };

  return {
    currentBoard,
    setOX,
    currentTurn,
    winner,
    history,
    currentStep,
    jumpTo,
  };
};

export default useGame;
