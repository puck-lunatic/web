function findSpecialInteger(arr: number[]): number {
  const n = arr.length;
  let flag = -1;
  let count = 0;
  for (const num of arr) {
    if (flag === num) {
      count += 1;
    } else {
      flag = num;
      count = 1;
    }
    if (count / n > 0.25) {
      return flag;
    }
  }
  return -1;
}
