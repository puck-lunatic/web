function distanceLimitedPathsExist(
  n: number,
  edgeList: number[][],
  queries: number[][]
): boolean[] {
  const p = Array.from({ length: n }, (_, i) => i);
  edgeList.sort((a, b) => a[2] - b[2]);
  const length = queries.length;
  const result: boolean[] = new Array(length);
  const qid = Array.from({ length: length }, (_, i) => i);

  qid.sort((i, j) => queries[i][2] - queries[j][2]);
  let j = 0;
  const find = (x: number): number => {
    if (p[x] !== x) {
      p[x] = find(p[x]);
    }
    return p[x];
  };
  for (const i of qid) {
    const a = queries[i][0],
      b = queries[i][1],
      limit = queries[i][2];
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const u = edgeList[j][0],
        v = edgeList[j][1];
      p[find(u)] = find(v);
      j++;
    }
    result[i] = find(a) === find(b);
  }
  return result;
}
