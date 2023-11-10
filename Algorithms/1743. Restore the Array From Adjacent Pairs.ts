function restoreArray(adjacentPairs: number[][]): number[] {
  const map: Map<number, number[]> = new Map();
  for (const [u, v] of adjacentPairs) {
    const uList = map.get(u) ?? [];
    const vList = map.get(v) ?? [];
    uList.push(v);
    vList.push(u);
    map.set(u, uList);
    map.set(v, vList);
  }

  const getFirstNode = (): number => {
    for (const [node, list] of map.entries()) {
      if (list.length === 1) {
        return node;
      }
    }
  };

  let node = getFirstNode();
  const visited: Set<number> = new Set([node]);
  const result: number[] = [node];
  let stop = false;

  while (true) {
    if (stop) {
      break;
    }
    stop = true;
    for (const nextNode of map.get(node)) {
      if (!visited.has(nextNode)) {
        node = nextNode;
        result.push(node);
        visited.add(node);
        stop = false;
        break;
      }
    }
  }

  return result;
}
