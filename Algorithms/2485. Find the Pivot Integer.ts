function pivotInteger(n: number): number {
  for (let i = n; i >= 1; i--) {
    const left = i === 1 ? 1 : ((1 + i) * i) / 2;
    const right = i === n ? n : ((i + n) * (n - i + 1)) / 2;
    console.log(i);
    console.log(left, right);
    if (left === right) {
      return i;
    }
  }
  return -1;
}
