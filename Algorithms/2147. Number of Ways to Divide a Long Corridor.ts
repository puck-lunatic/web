function numberOfWays(corridor: string): number {
  const MOD = 1_000_000_007;
  const n = corridor.length;
  const seatNumbers: number[] = [];

  for (let i = 0; i < n; i++) {
    if (corridor.charAt(i) === "S") {
      seatNumbers.push(i);
    }
  }

  if (seatNumbers.length % 2 !== 0 || seatNumbers.length === 0) {
    return 0;
  }

  let result = 1;

  for (let i = 2; i < seatNumbers.length; i += 2) {
    result = (result * (seatNumbers[i] - seatNumbers[i - 1])) % MOD;
  }

  return result;
}
