function deckRevealedIncreasing(deck: number[]): number[] {
  const queue: number[] = [];
  deck.sort((a, b) => a - b);
  const n = deck.length;
  for (let i = n - 1; i >= 0; i--) {
    if (queue.length !== 0) {
      queue.unshift(queue.pop());
    }
    queue.unshift(deck[i]);
  }
  const result: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    result[i] = queue.pop();
  }
  return result;
}
