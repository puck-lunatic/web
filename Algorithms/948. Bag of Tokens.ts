function bagOfTokensScore(tokens: number[], power: number): number {
  let result = 0;
  tokens.sort((a, b) => a - b);
  console.log(tokens);
  while (tokens.length > 0) {
    if ((tokens.length === 1 || result === 0) && power < tokens[0]) {
      break;
    }
    if (power >= tokens[0]) {
      const head = tokens.shift();
      console.log(head);
      power -= head;
      result += 1;
      continue;
    }
    const tail = tokens.pop();
    power += tail;
    result -= 1;
  }
  return result;
}
