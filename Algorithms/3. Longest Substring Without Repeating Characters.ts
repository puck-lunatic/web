function lengthOfLongestSubstring(s: string): number {
  const chars: string[] = s.split("");
  const length: number = chars.length;
  if (length === 0) {
    return 0;
  }
  let queue: string[] = [];
  let result: number = 0;
  for (let i = 0; i < length; i++) {
    const char: string = chars[i];
    if (!queue.includes(char)) {
      queue.push(char);
      result = Math.max(result, queue.length);
    } else {
      const index: number = queue.indexOf(char);
      queue = queue.slice(index + 1);
      queue.push(char);
      result = Math.max(result, queue.length);
    }
  }
  return result;
}
