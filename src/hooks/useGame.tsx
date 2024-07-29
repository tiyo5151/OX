const useGame = () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const setpoint = (x: number, y: number) => {
    console.log(x, y);
  };
  return {
    board,
    setpoint,
  };
}

export default useGame;