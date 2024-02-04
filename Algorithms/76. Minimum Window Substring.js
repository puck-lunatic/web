/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const m = s.length;
  const n = t.length;
  if (m < n) {
    return "";
  }
  let result = "";
  const need = new Array(128).fill(0);
  const window = new Array(128).fill(0);
  for (let i = 0; i < n; i++) {
    need[t.charCodeAt(i)]++;
  }
  let left = 0;
  let right = 0;

  let count = 0;
  let min = m + 1;
  while (right < m) {
    let index = s.charCodeAt(right);
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
};
