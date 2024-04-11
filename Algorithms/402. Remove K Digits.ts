function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];
  for (const c of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > c) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }
  while (k--) {
    stack.pop();
  }
  return stack.join("").replace(/^0*/g, "") || "0";
}
