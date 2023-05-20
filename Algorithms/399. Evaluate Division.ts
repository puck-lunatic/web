function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph: {
    [key: string]: {
      [key: string]: number;
    };
  } = {};

  function getResult([dividend, divisor]: string[]) {
    if (!graph[dividend] || !graph[divisor]) {
      return -1;
    }

    const visited = new Set([dividend]);

    const q: { cur: string; res: number }[] = [{ cur: dividend, res: 1 }];
    while (q.length > 0) {
      const { cur, res } = q.pop()!;
      if (cur === divisor) {
        return res;
      }

      if (cur in graph) {
        for (const [child, mult] of Object.entries(graph[cur])) {
          if (!visited.has(child)) {
            visited.add(child);
            q.push({
              cur: child,
              res: res * mult,
            });
          }
        }
      }
    }
    return -1;
  }

  equations.forEach(([dividend, divisor], i) => {
    const result = values[i];
    if (!(dividend in graph)) {
      graph[dividend] = {};
    }
    graph[dividend][divisor] = result;
    if (!(divisor in graph)) {
      graph[divisor] = {};
    }
    graph[divisor][dividend] = 1 / result;
  });

  return queries.map((query) => getResult(query));
}
