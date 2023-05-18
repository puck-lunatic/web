function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  // Time Limit Exceeded
  // let result: number[] = Array.from({ length: n }, (_, i) => i);
  // return result.filter(e => edges.every(edge => edge[1] !== e));
  const from = edges.map((edge) => edge[0]);
  const to = edges.map((edge) => edge[1]);
  return [...new Set(from.filter((e) => !to.includes(e)))];
}
