function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  let result: string[] = [];
  let letterMap: Map<string, string[]> = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  for (const char of digits) {
    const letters = letterMap.get(char);
    const temp: string[] = [];

    for (const letter of letters) {
      if (result.length === 0) {
        temp.push(letter);
      } else {
        for (const r of result) {
          temp.push(`${r}${letter}`);
        }
      }
    }
    result = temp;
  }
  return result;
}
