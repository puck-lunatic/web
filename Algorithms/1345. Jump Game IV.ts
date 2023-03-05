function minJumps(arr: number[]): number {
  const hashTable: Map<number, number[]> = new Map();
  let canJump = false;
  for (let i = 0; i < arr.length; i++) {
    if (hashTable.has(arr[i])) {
      canJump = true;
      if (i == arr.length - 1) {
        hashTable.set(arr[i], [i]);
      } else {
        hashTable.get(arr[i]).push(i);
      }
    } else {
      hashTable.set(arr[i], [i]);
    }
  }
  if (!canJump) {
    return arr.length - 1;
  }
  let queue: Array<number> = [0];
  const visited = new Set();
  let depth = 0;
  while (queue.length > 0) {
    const innerQueue: Array<number> = [];
    while (queue.length > 0) {
      const node = queue.pop();
      if (node == arr.length - 1) {
        return depth;
      }
      visited.add(node);
      if (node > 0 && hashTable.has(arr[node - 1])) {
        innerQueue.push(node - 1);
      }
      if (node < arr.length - 1 && hashTable.has(arr[node + 1])) {
        innerQueue.push(node + 1);
      }
      hashTable.get(arr[node])?.forEach((v) => {
        if (!visited.has(v)) {
          innerQueue.push(v);
        }
      });
      hashTable.delete(arr[node]);
    }
    depth++;
    queue = innerQueue;
  }
  return depth;
}
