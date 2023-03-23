function makeConnected(n: number, connections: number[][]): number {
  const pcs: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    pcs[i] = i;
  }
  const find = (x: number) => {
    if (pcs[x] !== x) {
      pcs[x] = find(pcs[x]);
    }
    return pcs[x];
  };
  let cnt: number = 0;
  for (const connection of connections) {
    const a = connection[0];
    const b = connection[1];
    if (find(a) === find(b)) {
      cnt++;
    } else {
      pcs[find(a)] = find(b);
      n--;
    }
  }
  return n - 1 > cnt ? -1 : n - 1;
}
