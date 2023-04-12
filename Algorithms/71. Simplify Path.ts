function simplifyPath(path: string): string {
  path = `${path}/`;

  const stack = [];
  let temp = "";
  const length = path.length;
  for (let i = 1; i < length; i++) {
    const char = path[i];
    if (char === "/") {
      if (temp !== "" && temp !== ".") {
        if (temp === "..") {
          if (stack.length !== 0) {
            stack.pop();
          }
        } else {
          stack.push(temp);
        }
      }
      temp = "";
    } else {
      temp = `${temp}${char}`;
    }
  }

  return `/${stack.join("/")}`;
}
