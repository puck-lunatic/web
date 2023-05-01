function average(salary: number[]): number {
  const n = salary.length;
  salary = salary.sort((a, b) => a - b).splice(1, n - 2);
  return salary.reduce((acc, cur) => acc + cur, 0) / (n - 2);
}
