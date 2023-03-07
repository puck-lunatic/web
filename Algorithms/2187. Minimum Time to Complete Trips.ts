function minimumTime(time: number[], totalTrips: number): number {
  const min = Math.min(...time);
  let left = 1,
    right = min * totalTrips;
  while (left < right) {
    let cnt = 0;
    const mid = Math.floor((left + right) / 2);
    for (let t of time) {
      cnt += Math.floor(mid / t);
    }
    if (cnt >= totalTrips) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
