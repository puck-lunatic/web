function generateMatrix(n: number): number[][] {
  const result: number[][] = Array.from({ length: n }, () =>
    new Array(n).fill(0)
  );
  type Direction = "up" | "left" | "right" | "down";
  let direction: Direction = "right";
  let x = 0;
  let y = 0;
  for (let i = 1; i <= n * n; i++) {
    result[x][y] = i;
    if (direction === "right") {
      if (y === n - 1 || result[x][y + 1] !== 0) {
        direction = "down";
        x += 1;
      } else {
        y += 1;
      }
      continue;
    }
    if (direction === "down") {
      if (x === n - 1 || result[x + 1][y] !== 0) {
        direction = "left";
        y -= 1;
      } else {
        x += 1;
      }
      continue;
    }
    if (direction === "left") {
      if (y === 0 || result[x][y - 1] !== 0) {
        direction = "up";
        x -= 1;
      } else {
        y -= 1;
      }
      continue;
    }
    if (direction === "up") {
      if (x === 0 || result[x - 1][y] !== 0) {
        direction = "right";
        y += 1;
      } else {
        x -= 1;
      }
      continue;
    }
  }
  return result;
}
