function removeStones(stones: number[][]): number {
  const visited: Set<string> = new Set();
  let num: number = 0;

  const dfs = (row: number, col: number): void => {
    const coordinate = `${row}-${col}`;

    if (visited.has(coordinate)) {
      return;
    }

    visited.add(coordinate);
    for (const [x, y] of stones) {
      if (row === x || col === y) {
        dfs(x, y);
      }
    }
  };

  for (const [x, y] of stones) {
    const coordinate = `${x}-${y}`;

    if (!visited.has(coordinate)) {
      dfs(x, y);
      num++;
    }
  }

  return stones.length - num;
}
