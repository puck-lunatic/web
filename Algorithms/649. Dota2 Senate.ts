function predictPartyVictory(senate: string): string {
  const senators = senate.split("");
  const length = senators.length;
  let turn = "_";
  let vote = 0;
  let index = 0;
  while (
    !senators.every((s) => s === "R" || s === "_") &&
    !senators.every((s) => s === "D" || s === "_")
  ) {
    const current = senators[index];

    if (current === "_") {
      if (index === length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      continue;
    }

    if (turn === "_") {
      turn = current;
      vote = 1;
      if (index === length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      continue;
    }

    if (turn === current) {
      vote += 1;
    } else {
      vote -= 1;
      senators[index] = "_";
      if (vote === 0) {
        turn = "_";
      }
    }
    if (index === length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }
  return senators.includes("R") ? "Radiant" : "Dire";
}
