function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) {
    return -1;
  }
  const haystackLength: number = haystack.length;
  const needleLength: number = needle.length;
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (needle === haystack.slice(i, i + needleLength)) {
      return i;
    }
  }

  return -1;
}
