function partitionString(s: string): number {
  let result = 0;
  const chars: string[] = [];
  for (const char of s) {
    if (chars.includes(char)) {
      result += 1;
      chars.splice(0);
    }
    chars.push(char);
  }

  return result + 1;
}
