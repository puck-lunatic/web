function numSteps(s: string): number {
  let n = s.length;
  let result = 0;

  while (n !== 1) {
    if (s[n - 1] !== "0") {
      let temp = 1;
      for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "0" && temp === 1) {
          s = `${s.substring(0, i)}1${s.substring(i + 1)}`;
          temp = 0;
          break;
        } else if (
          (s[i] === "0" && temp === 0) ||
          (s[i] === "1" && temp === 0)
        ) {
          break;
        } else if (s[i] === "1" && temp === 1) {
          s = `${s.substring(0, i)}0${s.substring(i + 1)}`;
          temp = 1;
        }
      }
      if (temp === 1) {
        s = `${s}1`;
      }
      result += 1;
    }

    s = s.substring(0, s.length - 1);
    n = s.length;
    result += 1;
  }
  return result;
}
