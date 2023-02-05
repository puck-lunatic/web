function searchMatrix(matrix: number[][], target: number): boolean {
  let l: number = 0;
  let r: number = matrix.length - 1;
  const binarySearch = (arr: number[], target: number): boolean => {
    let l: number = 0;
    let r: number = arr.length - 1;
    while (l <= r) {
      const mid: number = Math.floor((l + r) / 2);
      if (arr[mid] === target) {
        return true;
      }
      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return false;
  };

  while (l <= r) {
    const mid: number = Math.floor((l + r) / 2);
    const first: number = matrix[mid][0];
    const last: number = matrix[mid][matrix[mid].length - 1];
    if (target === first || target === last) {
      return true;
    }
    if (target > first && target < last) {
      return binarySearch(matrix[mid], target);
    }
    if (target < first) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
}
