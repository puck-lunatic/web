function leastInterval(tasks: string[], n: number): number {
  if (n === 0) {
    return tasks.length;
  }
  const group: Object = {};
  tasks.forEach((task) => {
    group[task] = (group[task] | 0) + 1;
  });
  const sorted = Array.from(Object.entries(group).sort((a, b) => b[1] - a[1]));
  const max: number = sorted[0][1];
  const filtered = sorted.filter((e) => e[1] === max);

  return Math.max((max - 1) * (n + 1) + filtered.length, tasks.length);
}
