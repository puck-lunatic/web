const MOD = 10 ** 9 + 7;

function numberOfArrays(s: string, k: number): number {
  const memo: number[] = [];
  const traverse = (index: number): number => {
    if (index === s.length) {
      return 1;
    }
    if (s[index] === "0") {
      return 0;
    }

    if (memo[index]) {
      return memo[index];
    }
    let ways = 0;
    for (let i = index + 1; i <= s.length; i++) {
      if (Number(s.substring(index, i)) <= k) {
        ways += traverse(i);
      } else {
        break;
      }
    }
    memo[index] = ways % MOD;
    return memo[index];
  };

  return traverse(0);
}
