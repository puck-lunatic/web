function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  while (k > 0 && capital.length > 0) {
    let maxProfit: number = -1;
    let canAffordAll: boolean = k >= capital.length;
    for (let i = 0; i < capital.length; i++) {
      if (capital[i] <= w) {
        if (maxProfit === -1) {
          maxProfit = i;
        }
        if (profits[i] > profits[maxProfit]) {
          maxProfit = i;
        }
      } else {
        canAffordAll = false;
      }
    }
    // if can't afford anything
    if (maxProfit === -1) {
      break;
    }
    // if can afford all
    if (canAffordAll) {
      for (let i = 0; i < capital.length; i++) {
        w += profits[i];
      }
      return w;
    }

    w += profits[maxProfit];
    capital.splice(maxProfit, 1);
    profits.splice(maxProfit, 1);
    k--;
  }
  return w;
}
