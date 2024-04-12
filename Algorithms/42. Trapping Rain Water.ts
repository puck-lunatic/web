function trap(height: number[]): number {
  const n = height.length;
  const left = new Array(n).fill(height[0]);
  const right = new Array(n).fill(height[n - 1]);
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
    right[n - i - 1] = Math.max(right[n - i], height[n - i - 1]);
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.min(left[i], right[i]) - height[i];
  }
  return result;
}
