function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, (_) => []);
  const degree: number[] = new Array(numCourses).fill(0);
  for (const [take, pre] of prerequisites) {
    graph[pre].push(take);
    degree[take] += 1;
  }
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length > 0) {
    const course = queue.shift();
    count += 1;
    for (const i of graph[course]) {
      degree[i] -= 1;
      if (degree[i] === 0) {
        queue.push(i);
      }
    }
  }
  return count === numCourses;
}
