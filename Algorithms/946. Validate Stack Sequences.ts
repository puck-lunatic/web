function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = [];
  let i = 0;
  for (const v of pushed) {
    stack.push(v);
    while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return i === pushed.length;
}
