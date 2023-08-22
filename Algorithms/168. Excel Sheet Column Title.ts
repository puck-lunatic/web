function convertToTitle(columnNumber: number): string {
  const chars: string[] = [];
  while (columnNumber > 0) {
    columnNumber -= 1;
    const rem: number = columnNumber % 26;
    chars.unshift(String.fromCharCode(rem + 65));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return chars.join("");
}
