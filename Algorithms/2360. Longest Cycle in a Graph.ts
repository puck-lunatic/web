function longestCycle(edges: number[]): number {
  const length: number = edges.length;
  const visisted: boolean[] = new Array(length).fill(false);
  let result: number = -1;
  for (let i = 0; i < length; i++) {
    if (visisted[i]) {
      continue;
    }
    let j: number = i;
    const cycle: number[] = [];
    for (; j !== -1 && !visisted[j]; j = edges[j]) {
      visisted[j] = true;
      cycle.push(j);
    }
    if (j === -1) {
      continue;
    }
    for (let k = 0; k < cycle.length; k++) {
      if (cycle[k] === j) {
        result = Math.max(result, cycle.length - k);
        break;
      }
    }
  }
  return result;
}
