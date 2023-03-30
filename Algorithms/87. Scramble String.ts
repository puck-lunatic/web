function isScramble(s1: string, s2: string): boolean {
  const map: Map<string, boolean> = new Map();

  const recurse = (str: string, i: number) => {
    if (str.length === 1) {
      return s2[i] === str;
    }
    const key = `${str},${i}`;
    if (map.has(key)) {
      return map.get(key);
    }
    let result = false;
    for (let j = 1; j < str.length; j++) {
      let left = str.slice(0, j);
      let right = str.slice(j);
      let leftToRight = recurse(left, i) && recurse(right, i + left.length);
      if (leftToRight) {
        result = true;
        break;
      }
      let rightToLeft = recurse(right, i) && recurse(left, i + right.length);
      if (rightToLeft) {
        result = true;
        break;
      }
    }
    map.set(key, result);
    return result;
  };

  return recurse(s1, 0);
}
