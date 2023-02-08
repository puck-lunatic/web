function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const result: number[] = [];
  const graph: number[][] = Array.from({ length: numCourses }, (_) => []);
  const preNum: number[] = new Array(numCourses).fill(0);
  const queue: number[] = [];
  for (let [after, before] of prerequisites) {
    graph[before].push(after);
    preNum[after]++;
  }
  for (let i = 0; i < numCourses; i++) {
    if (preNum[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const i = queue.shift();
    result.push(i);
    for (let j of graph[i]) {
      preNum[j]--;
      if (preNum[j] === 0) {
        queue.push(j);
      }
    }
  }
  return result.length == numCourses ? result : [];
}
