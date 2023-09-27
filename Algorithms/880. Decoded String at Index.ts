function decodeAtIndex(s: string, k: number): string {
  let size = 0;
  const n = s.length;

  // Calculate the size of decoded str
  for (const l of s) {
    size = isNaN(+l) ? size + 1 : +l * size;
  }

  // Traverse the string backward to find the k-th character
  for (let i = n - 1; i >= 0; i--) {
    const c = s[i];
    k %= size;

    if (k === 0 && isNaN(+c)) {
      return c;
    } else if (!isNaN(+c)) {
      size /= +c;
    } else {
      size--;
    }
  }

  return s[1];
}
