function reorganizeString(s: string): string {
  const map: Record<string, number> = {};

  for (const char of s) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char] += 1;
  }

  const maxHeap = new MaxPriorityQueue();
  let result = "";
  for (const [char, count] of Object.entries(map)) {
    maxHeap.enqueue(char, count);
  }

  while (maxHeap.size() > 1) {
    const { element: firstChar, priority: firstCount } = maxHeap.dequeue();
    const { element: secondChar, priority: secondCount } = maxHeap.dequeue();

    result +=
      firstChar === result[result.length - 1]
        ? secondChar + firstChar
        : firstChar + secondChar;

    if (firstCount > 1) {
      maxHeap.enqueue(firstChar, firstCount - 1);
    }
    if (secondCount > 1) {
      maxHeap.enqueue(secondChar, secondCount - 1);
    }
  }

  if (maxHeap.size() > 0) {
    const { element: char, priority: count } = maxHeap.dequeue();

    if (count > 1 || char === result[result.length - 1]) {
      return "";
    }

    result = result + char;
  }

  return result;
}
