function isPathCrossing(path: string): boolean {
  const visited: string[] = ["00"];
  const current = [0, 0];
  for (const step of path) {
    const dx = step === "W" ? -1 : step === "E" ? 1 : 0;
    const dy = step === "N" ? -1 : step === "S" ? 1 : 0;
    current[0] = current[0] + dx;
    current[1] = current[1] + dy;
    if (visited.includes(current.join(""))) {
      return true;
    }
    visited.push(current.join(""));
  }
  return false;
}
