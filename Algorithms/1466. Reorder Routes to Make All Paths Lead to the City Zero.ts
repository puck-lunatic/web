function minReorder(n: number, connections: number[][]): number {
  // from: (<from city>, [<to cities>])
  // to: (<to city>, [<from cities>])
  const from: Map<number, Array<number>> = new Map(),
    to: Map<number, Array<number>> = new Map();

  // Function to insert in values in map
  const insert = (
    map: Map<number, Array<number>>,
    key: number,
    value: number
  ) => {
    if (map.has(key)) {
      const arr = map.get(key);
      arr.push(value);
      map.set(key, arr);
    } else {
      map.set(key, [value]);
    }
  };

  // Set all values in both maps
  for (const [a, b] of connections) {
    insert(from, a, b);
    insert(to, b, a);
  }

  // Queue: cities to visit
  const queue: number[] = [0],
    visited: Set<number> = new Set();
  let count: number = 0;

  while (queue.length > 0) {
    const cur = queue.shift(); // First element in queue

    // Check values in first map
    if (from.has(cur)) {
      for (const x of from.get(cur)) {
        // If visited, do nothing else add to queue
        if (visited.has(x)) {
          continue;
        }
        queue.push(x);
        count++; // Change direction of this path
      }
    }

    if (to.has(cur)) {
      // If visited, do nothing else add to queue
      for (const x of to.get(cur)) {
        if (visited.has(x)) {
          continue;
        }
        queue.push(x);
      }
    }

    visited.add(cur); // Mark city as visited
  }

  return count;
}
