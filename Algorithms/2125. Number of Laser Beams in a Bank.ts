function numberOfBeams(bank: string[]): number {
  let result = 0;
  const floors = bank.filter((e) => e.includes("1"));
  const n = floors.length;
  for (let i = 1; i < n; i++) {
    result +=
      floors[i].split("").filter((e) => e === "1").length *
      floors[i - 1].split("").filter((e) => e === "1").length;
  }
  return result;
}
