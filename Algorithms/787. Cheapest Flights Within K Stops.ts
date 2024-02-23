function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const dist = new Array(n).fill(Number.POSITIVE_INFINITY);
  let backup: number[] = new Array(n).fill(Number.POSITIVE_INFINITY);
  dist[src] = 0;
  for (let i = 0; i < k + 1; i++) {
    backup = [...dist];
    for (const flight of flights) {
      const [from, to, price] = flight;
      dist[to] = Math.min(dist[to], backup[from] + price);
    }
  }
  return dist[dst] == Number.POSITIVE_INFINITY ? -1 : dist[dst];
}
