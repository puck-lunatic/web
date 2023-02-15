function calculate(s: string): number {
  let result: number = 0;
  const stack: number[] = [];
  let num: number = 0;
  let operator: string = "+";
  for (let i = 0; i < s.length; i++) {
    const char: string = s.charAt(i);
    if (/[0-9]/.test(char)) {
      num = num * 10 + Number(char);
    }
    if (
      i === s.length - 1 ||
      char === "+" ||
      char === "-" ||
      char === "*" ||
      char == "/"
    ) {
      if (operator === "+") {
        stack.push(num);
      } else if (operator === "-") {
        stack.push(-num);
      } else if (operator === "*") {
        stack.push(stack.pop() * num);
      } else {
        const last: number = stack.pop();
        stack.push(last > 0 ? Math.floor(last / num) : Math.ceil(last / num));
      }
      operator = char;
      num = 0;
    }
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
