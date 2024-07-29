import styles from "../pages/index.module.css";

interface Props {
  board: number[][];
  setOX: (y: number, x: number) => void;
}

const Board: React.FC<Props> = (
  { board, setOX }
) => {
  return (
    <div className={styles.board}>
      {board.map((row:number[], y:number) => (
        <div key={y} className={styles.row}>
          {row.map((cell:number, x:number) => (
            <div key={x} className={styles.cell} onClick={() => setOX(x,y)}>
              {board[y][x] === 1 ? "○" : board[y][x] === 2 ? "×" : ""}
            </div>
          ))}
    </div>
  ))};
  </div>
  );
};

export default Board;