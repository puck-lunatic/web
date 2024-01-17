function uniqueOccurrences(arr: number[]): boolean {
  const occurrences = {};
  for (const num of arr) {
    occurrences[num] = (occurrences[num] ?? 0) + 1;
  }

  return (
    new Set(Object.values(occurrences)).size ===
    Object.values(occurrences).length
  );
}
