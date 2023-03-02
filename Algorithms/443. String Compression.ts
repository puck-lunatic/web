function compress(chars: string[]): number {
  let result: number = 0;
  const length: number = chars.length;
  for (let i = 0, j = i + 1; i < length; ) {
    while (j < length && chars[j] === chars[i]) {
      j++;
    }
    chars[result] = chars[i];
    result++;
    if (j - i > 1) {
      const count: string = (j - i).toString();
      for (const c of count.split("")) {
        chars[result] = c;
        result++;
      }
    }
    i = j;
  }
  return result;
}
