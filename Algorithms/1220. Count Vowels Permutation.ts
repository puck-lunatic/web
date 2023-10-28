function countVowelPermutation(n: number): number {
  const MOD = 1_000_000_007;
  const a = new Array(n).fill(0);
  const e = new Array(n).fill(0);
  const i = new Array(n).fill(0);
  const o = new Array(n).fill(0);
  const u = new Array(n).fill(0);
  a[0] = 1;
  e[0] = 1;
  i[0] = 1;
  o[0] = 1;
  u[0] = 1;

  for (let j = 1; j < n; j++) {
    e[j] += a[j - 1];

    a[j] += e[j - 1];
    i[j] += e[j - 1];

    a[j] += i[j - 1];
    e[j] += i[j - 1];
    o[j] += i[j - 1];
    u[j] += i[j - 1];

    i[j] += o[j - 1];
    u[j] += o[j - 1];

    a[j] += u[j - 1];

    a[j] %= MOD;
    e[j] %= MOD;
    i[j] %= MOD;
    o[j] %= MOD;
    u[j] %= MOD;
  }

  return (a[n - 1] + e[n - 1] + i[n - 1] + o[n - 1] + u[n - 1]) % MOD;
}
