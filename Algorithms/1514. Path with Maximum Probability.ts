interface Pair {
  i: number;
  s: number;
}

function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  const g: Pair[][] = Array.from({ length: n }, (_) => []);
  for (let i = 0; i < edges.length; i++) {
    const a = edges[i][0],
      b = edges[i][1];
    const s = succProb[i];
    g[a].push({ i: b, s });
    g[b].push({ i: a, s });
  }
  const d: number[] = Array.from({ length: n }, (_) => 0);
  d[start] = 1.0;
  const visited: boolean[] = Array.from({ length: n }, (_) => false);
  const q: number[] = [];
  q.push(start);
  visited[start] = true;
  while (q.length > 0) {
    const i = q.shift();
    visited[i] = false;
    for (const ne of g[i]) {
      const j = ne.i;
      const s = ne.s;
      if (d[j] < d[i] * s) {
        d[j] = d[i] * s;
        if (!visited[j]) {
          q.push(j);
          visited[j] = true;
        }
      }
    }
  }
  return d[end];
}
