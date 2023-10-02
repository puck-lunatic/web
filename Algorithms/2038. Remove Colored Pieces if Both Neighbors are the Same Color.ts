function winnerOfGame(colors: string): boolean {
  const n = colors.length;
  let removableA = 0;
  let removableB = 0;
  for (let i = 1; i < n - 1; i++) {
    if (colors[i - 1] === "A" && colors[i] === "A" && colors[i + 1] === "A") {
      removableA += 1;
    }
    if (colors[i - 1] === "B" && colors[i] === "B" && colors[i + 1] === "B") {
      removableB += 1;
    }
  }
  // console.log(removableA);
  // console.log(removableB);
  return removableA > removableB;
}
