function sortItems(
  n: number,
  m: number,
  group: number[],
  beforeItems: number[][]
): number[] {
  let index = m;
  const groupItems: number[][] = Array.from(
    { length: n + m },
    (_) => new Array()
  );
  const itemDegree: number[] = new Array(n).fill(0);
  const gorupDegree: number[] = new Array(n + m).fill(0);
  const itemGraph: number[][] = Array.from({ length: n }, (_) => new Array());
  const groupGraph: number[][] = Array.from(
    { length: n + m },
    (_) => new Array()
  );
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      group[i] = index;
      index += 1;
    }
    groupItems[group[i]].push(i);
  }
  for (let i = 0; i < n; i++) {
    for (const j of beforeItems[i]) {
      if (group[i] === group[j]) {
        itemDegree[i] += 1;
        itemGraph[j].push(i);
      } else {
        gorupDegree[group[i]] += 1;
        groupGraph[group[j]].push(group[i]);
      }
    }
  }
  let items = Array.from({ length: n + m }, (_, i) => i);
  const topoSort = (
    graph: number[][],
    degree: number[],
    items: number[]
  ): number[] => {
    const q: number[] = [];
    for (const i of items) {
      if (degree[i] === 0) {
        q.push(i);
      }
    }
    const result: number[] = [];
    while (q.length) {
      const i = q.pop()!;
      result.push(i);
      for (const j of graph[i]) {
        degree[j] -= 1;
        if (degree[j] === 0) {
          q.push(j);
        }
      }
    }
    return result.length === items.length ? result : [];
  };
  const groupOrder = topoSort(groupGraph, gorupDegree, items);
  if (groupOrder.length === 0) {
    return [];
  }
  const result: number[] = [];
  for (const gi of groupOrder) {
    items = groupItems[gi];
    const itemOrder = topoSort(itemGraph, itemDegree, items);
    if (itemOrder.length !== items.length) {
      return [];
    }
    result.push(...itemOrder);
  }
  return result;
}
