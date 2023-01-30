function longestCommonPrefix(strs: string[]): string {
  const minLength = Math.min(...strs.map((str) => str.length));
  let result: string = "";
  let indicator: number = 0;
  strs.sort((a, b) => a.length - b.length);
  // console.log(strs);
  while (indicator < minLength) {
    const char: string = strs[0].charAt(indicator);
    if (strs.every((str) => str.charAt(indicator) === char)) {
      result = `${result}${char}`;
      indicator++;
    } else {
      break;
    }
  }

  return result;
}
