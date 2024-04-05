function makeGood(s: string): string {
  const stack: string[] = [];

  for (const c of s) {
    stack.push(c);

    if (stack.length === 1) {
      continue;
    }

    const tail1 = stack.pop();
    const tail2 = stack.pop();

    if (
      (tail1.codePointAt(0) > tail2.codePointAt(0) &&
        tail1.codePointAt(0) - 32 === tail2.codePointAt(0)) ||
      (tail1.codePointAt(0) < tail2.codePointAt(0) &&
        tail1.codePointAt(0) + 32 === tail2.codePointAt(0))
    ) {
      continue;
    }
    stack.push(tail2);
    stack.push(tail1);
  }

  return stack.join("");
}
