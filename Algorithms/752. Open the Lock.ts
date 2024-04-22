function openLock(deadends: string[], target: string): number {
  if (target === "0000") {
    return 0;
  }
  if (deadends.includes("0000")) {
    return -1;
  }
  const set = new Set(deadends);
  const queue: string[] = [];
  queue.push("0000");
  set.add("0000");
  const next = (state: string): string[] => {
    const result: string[] = [];
    const chars = state.split("");
    for (let i = 0; i < 4; i++) {
      const char = chars[i];
      chars[i] = char === "0" ? "9" : String(Number(char) - 1);
      result.push(chars.join(""));
      chars[i] = char == "9" ? "0" : String(Number(char) + 1);
      result.push(chars.join(""));
      chars[i] = char;
    }
    return result;
  };
  let result = 0;
  while (queue.length !== 0) {
    result += 1;
    for (let n = queue.length; n > 0; n--) {
      const state = queue.shift();
      for (const t of next(state)) {
        if (t === target) {
          return result;
        }
        if (!set.has(t)) {
          queue.push(t);
          set.add(t);
        }
      }
    }
  }
  return -1;
}
