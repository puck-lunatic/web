function destCity(paths: string[][]): string {
  const froms = paths.map((path) => path[0]);
  const tos = paths.map((path) => path[1]);

  return tos.find((to) => !froms.includes(to));
}
