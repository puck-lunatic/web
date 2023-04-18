function mergeAlternately(word1: string, word2: string): string {
  let index = 0;
  const chars1 = word1.split("");
  const chars2 = word2.split("");
  let str = "";
  while (chars1.length !== 0 && chars2.length !== 0) {
    if (index % 2 === 0) {
      str += chars1.shift();
    } else {
      str += chars2.shift();
    }
    index++;
  }

  return `${str}${chars1.join("")}${chars2.join("")}`;
}
