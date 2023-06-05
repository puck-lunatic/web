function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length === 2) {
    return true;
  }
  const x = coordinates[0][0];
  const y = coordinates[0][0];
  if (
    coordinates.every((p) => p[0] === x) ||
    coordinates.every((p) => p[1] === y)
  ) {
    return true;
  }
  const point1 = coordinates[0];
  const point2 = coordinates[1];
  const a = (point2[1] - point1[1]) / (point2[0] - point1[0]);
  const b = point1[1] - point1[0] * a;
  return coordinates.every((p) => p[0] * a + b === p[1]);
}
