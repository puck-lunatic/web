function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number
): number {
  if (source === target) {
    return 0;
  }
  const map: Map<number, number[]> = new Map();
  const queue: number[] = [];
  const visited: Set<number> = new Set();
  let result: number = 0;
  for (let i = 0; i < routes.length; i++) {
    for (let stop of routes[i]) {
      if (stop === source) {
        queue.push(i);
        visited.add(i);
      }
      const arr: number[] = map.has(stop) ? map.get(stop) : [];
      arr.push(i);
      map.set(stop, arr);
    }
  }
  while (queue.length > 0) {
    result++;
    for (let i = queue.length; i > 0; i--) {
      const bus: number = queue.shift();
      for (let stop of routes[bus]) {
        if (stop === target) {
          return result;
        }
        if (map.has(stop)) {
          for (let b of map.get(stop)) {
            if (visited.has(b)) {
              continue;
            }
            visited.add(b);
            queue.push(b);
          }
        }
        map.delete(stop);
      }
    }
  }

  return -1;
}
