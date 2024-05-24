function maxScoreWords(
  words: string[],
  letters: string[],
  score: number[]
): number {
  const n1 = words.length;
  const n2 = letters.length;
  const wordScore = new Array(n1).fill(0);
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      wordScore[i] += score[words[i][j].charCodeAt(0) - 97];
    }
  }

  const letterDict = new Array(26).fill(0);
  for (let i = 0; i < n2; i++) {
    letterDict[letters[i].charCodeAt(0) - 97] += 1;
  }

  let result = 0;
  function dfs(score: number, visited: Set<number>) {
    for (let i = 0; i < n1; i++) {
      if (visited.has(i)) continue;

      let valid = true;
      for (let j = 0; j < words[i].length; j++) {
        const c = words[i][j].charCodeAt(0) - 97;
        letterDict[c]--;
        if (letterDict[c] < 0) {
          valid = false;
        }
      }

      if (valid) {
        result = Math.max(result, score + wordScore[i]);

        visited.add(i);
        dfs(score + wordScore[i], visited);
        visited.delete(i);
      }

      for (let j = 0; j < words[i].length; j++) {
        letterDict[words[i][j].charCodeAt(0) - 97]++;
      }
    }
  }
  dfs(0, new Set<number>());
  return result;
}
