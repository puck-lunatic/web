function isValid(s: string): boolean {
  const left = ["(", "{", "["];
  const stack: string[] = [];
  for (const char of s) {
    if (left.includes(char)) {
      stack.push(char);
    } else {
      if (
        (char === ")" && stack[stack.length - 1] === "(") ||
        (char === "}" && stack[stack.length - 1] === "{") ||
        (char === "]" && stack[stack.length - 1] === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
