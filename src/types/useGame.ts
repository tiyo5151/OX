type BoardState = (number | null)[][];
type History = {
  board: BoardState;
  turn: number;
};
type Winner = number | null;

export type { BoardState, History, Winner };
