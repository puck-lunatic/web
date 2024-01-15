function findWinners(matches: number[][]): number[][] {
  const n = matches.length;
  const loseRecords = {};
  for (const match of matches) {
    loseRecords[match[1]] = (loseRecords[match[1]] ?? 0) + 1;
    loseRecords[match[0]] = loseRecords[match[0]] ?? 0;
  }
  const arr1 = Object.entries(loseRecords)
    .filter((e) => e[1] === 0)
    .map((e) => Number(e[0]));
  arr1.sort((a, b) => a - b);
  const arr2 = Object.entries(loseRecords)
    .filter((e) => e[1] === 1)
    .map((e) => Number(e[0]));
  arr2.sort((a, b) => a - b);
  return [arr1, arr2];
}
