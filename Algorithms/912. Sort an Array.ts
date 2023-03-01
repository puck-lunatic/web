function sortArray(nums: number[]): number[] {
  const merge = (left: number[], right: number[]): number[] => {
    let lIndex: number = 0;
    let rIndex: number = 0;
    const lLength: number = left.length;
    const rLength: number = right.length;
    const mergedNums: number[] = [];
    while (lIndex < lLength || rIndex < rLength) {
      const lNum: number = left[lIndex];
      const rNum: number = right[rIndex];
      if (lNum !== undefined) {
        if (rNum === undefined) {
          mergedNums.push(lNum);
          lIndex++;
        } else {
          if (lNum <= rNum) {
            mergedNums.push(lNum);
            lIndex++;
          } else {
            mergedNums.push(rNum);
            rIndex++;
          }
        }
      } else {
        if (rNum !== undefined) {
          mergedNums.push(rNum);
          rIndex++;
        }
      }
    }
    return mergedNums;
  };

  const sort = (nums: number[]): number[] => {
    const mid: number = Math.floor(nums.length / 2);
    let left: number[] = nums.slice(0, mid);
    let right: number[] = nums.slice(mid);
    if (mid > 0) {
      left = sort(left);
      right = sort(right);
    }
    return merge(left, right);
  };

  return sort(nums);
}
