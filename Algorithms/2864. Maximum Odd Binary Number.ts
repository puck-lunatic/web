function maximumOddBinaryNumber(s: string): string {
  const digits = s.split("").map((e) => Number(e));
  digits.sort((a, b) => b - a);
  digits.shift();
  digits.push(1);
  return digits.join("");
}
