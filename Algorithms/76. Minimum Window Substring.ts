function minWindow(s: string, t: string): string {
  let m: number = s.length,
    n: number = t.length;
  if (m < n) {
    return "";
  }
  let result: string = "";
  const need: number[] = new Array(128).fill(0);
  const window: number[] = new Array(128).fill(0);
  for (let i = 0; i < n; i++) {
    need[t.charCodeAt(i)]++;
  }
  let left: number = 0,
    right: number = 0;

  let count: number = 0;
  let min: number = m + 1;
  while (right < m) {
    let index: number = s.charCodeAt(right);
    window[index]++;
    if (need[index] > 0 && need[index] >= window[index]) {
      count++;
    }
    while (count === n) {
      index = s.charCodeAt(left);
      if (need[index] > 0 && need[index] >= window[index]) {
        count--;
      }
      if (right - left + 1 < min) {
        min = right - left + 1;
        result = s.slice(left, right + 1);
      }
      window[index]--;
      left++;
    }
    right++;
  }
  return result;
}
