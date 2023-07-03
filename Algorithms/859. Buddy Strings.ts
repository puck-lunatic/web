function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }
  const n = s.length;
  let swapped = false;
  let pair: [string, string] = ["_", "_"];
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === goal.charAt(i)) {
      continue;
    }
    if (swapped) {
      return false;
    }
    if (pair[0] === "_" && pair[1] === "_") {
      pair = [s.charAt(i), goal.charAt(i)];
    } else {
      if (pair[0] === goal.charAt(i) && pair[1] === s.charAt(i)) {
        swapped = true;
        pair = ["", ""];
      } else {
        return false;
      }
    }
  }
  const hasDuplication = (str: string): boolean => {
    const chars = str.split("");
    chars.sort();
    for (let i = 0; i < n - 1; i++) {
      if (chars[i] === chars[i + 1]) {
        return true;
      }
    }
    return false;
  };
  return (
    (pair[0] === "_" && pair[1] === "_" && hasDuplication(s)) ||
    (pair[0] === "" && pair[1] === "")
  );
}
