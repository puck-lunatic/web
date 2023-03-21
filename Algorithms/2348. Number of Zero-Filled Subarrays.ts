function zeroFilledSubarray(nums: number[]): number {
  let result: number = 0;
  let zeros: number[] = [];
  for (let num of nums) {
    if (num === 0) {
      zeros.push(0);
    } else {
      if (zeros.length > 0) {
        const length = zeros.length;
        for (let i = 0; i <= length; i++) {
          result += i;
        }
        zeros.splice(0);
      }
    }
  }

  if (zeros.length > 0) {
    const length = zeros.length;
    for (let i = 0; i <= length; i++) {
      result += i;
    }
  }

  return result;
}
