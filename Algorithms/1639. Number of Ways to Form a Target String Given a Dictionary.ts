const MOD = 1000000007;

function numWays(words: string[], target: string): number {
  const memo = Array.from({ length: words[0].length + 1 }, () =>
    Array(target.length + 1).fill(-1)
  );
  const [wordSize, targetSize] = [words[0].length, target.length];
  const charCountMap = Array.from(
    { length: words[0].length + 1 },
    () => new Map()
  );

  for (let wIndex = 0; wIndex < wordSize; wIndex++) {
    words.forEach((word) => {
      const cVal = charCountMap[wIndex].get(word[wIndex]) ?? 0;
      charCountMap[wIndex].set(word[wIndex], cVal + 1);
    });
  }

  for (let tIndex = targetSize; tIndex >= 0; tIndex--) {
    for (let wIndex = wordSize; wIndex >= 0; wIndex--) {
      if (wordSize - wIndex < targetSize - tIndex) {
        memo[wIndex][tIndex] = 0;
      } else if (tIndex === targetSize) {
        memo[wIndex][tIndex] = 1;
      } else {
        const validStrCount = charCountMap[wIndex].get(target[tIndex]) ?? 0;
        memo[wIndex][tIndex] =
          validStrCount * memo[wIndex + 1][tIndex + 1] +
          memo[wIndex + 1][tIndex];
        memo[wIndex][tIndex] %= MOD;
      }
    }
  }
  return memo[0][0];
}
