function maxLength(arr: string[]): number {
  let result = 0;
  const isUnique = (str: string): boolean => {
    const map = {};
    for (const char of str) {
      map[char] = (map[char] || 0) + 1;
      if (map[char] >= 2) {
        return false;
      }
    }
    return true;
  };
  const aux = (index: number, current: string): void => {
    if (index > arr.length - 1) {
      result = Math.max(current.length, result);
      return;
    }
    if (isUnique(current)) {
      aux(index + 1, current);
      if (isUnique(current + arr[index])) {
        aux(index + 1, current + arr[index]);
      }
    }
  };
  aux(0, "");
  return result;
}
