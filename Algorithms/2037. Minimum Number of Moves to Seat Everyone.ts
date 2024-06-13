function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce((a, c, i) => a + Math.abs(c - students[i]), 0);
}
