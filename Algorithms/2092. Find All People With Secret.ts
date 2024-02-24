function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  parent[firstPerson] = 0;

  const findParent = (index: number): number => {
    if (parent[index] !== index) {
      parent[index] = findParent(parent[index]);
    }
    return parent[index];
  };

  const map = new Map<number, Array<Array<number>>>();
  for (const meeting of meetings) {
    const time = meeting[2];
    const members = map.get(time) || new Array();
    members.push(meeting);
    map.set(time, members);
  }
  const times = [...map.keys()].sort((a, b) => a - b);
  for (const time of times) {
    for (const meeting of map.get(time)) {
      const [a, b] = meeting;
      if (!parent[findParent(a)] || !parent[findParent(b)]) {
        parent[findParent(a)] = 0;
        parent[findParent(b)] = 0;
      }
      parent[findParent(a)] = parent[findParent(b)];
    }

    for (const meeting of map.get(time)) {
      const [a, b] = meeting;
      if (!parent[findParent(a)] || !parent[findParent(b)]) {
        parent[findParent(a)] = 0;
        parent[findParent(b)] = 0;
      } else {
        parent[a] = a;
        parent[b] = b;
      }
    }
  }

  const result: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (!parent[findParent(i)]) {
      result.push(i);
    }
  }
  return result;
}
