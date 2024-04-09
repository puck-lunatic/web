function timeRequiredToBuy(tickets: number[], k: number): number {
  let result = 0;
  const n = tickets.length;
  while (tickets[k] > 0) {
    for (let i = 0; i < n; i++) {
      if (tickets[i] === 0) {
        continue;
      }
      tickets[i] -= 1;
      result += 1;
      if (i === k && tickets[i] === 0) {
        break;
      }
    }
  }
  return result;
}
