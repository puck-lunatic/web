function sumSubarrayMins(arr: number[]): number {
  const n = arr.length;
  const left: number[] = new Array(n).fill(-1);
  const right: number[] = new Array(n).fill(n);
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack.at(-1)] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      left[i] = stack.at(-1);
    }
    stack.push(i);
  }

  stack.length = 0;
  for (let i = n - 1; ~i; i--) {
    while (stack.length > 0 && arr[stack.at(-1)] > arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      right[i] = stack.at(-1);
    }
    stack.push(i);
  }

  const MOD = 1_000_000_007;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += ((((i - left[i]) * (right[i] - i)) % MOD) * arr[i]) % MOD;
    result %= MOD;
  }
  return result;
}
