function longestPalindrome(words: string[]): number {
  let result: number = 0;
  const diff: Object = {};
  const same: Object = {};
  words.forEach((word) => {
    if (word[0] === word[1]) {
      same[word] = (same[word] | 0) + 1;
      if (same[word] === 2) {
        result += 4;
        delete same[word];
      }
    } else {
      const reverse: string = `${word[1]}${word[0]}`;
      if (diff[reverse]) {
        result += 4;
        diff[reverse] = diff[reverse] - 1;
      } else {
        diff[word] = (diff[word] | 0) + 1;
      }
    }
  });
  if (Object.keys(same).length > 0) {
    result += 2;
  }
  return result;
}
