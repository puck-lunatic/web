function removeStars(s: string): string {
  const chars = s.split("");
  const modifiedChars = chars.reduce((acc, cur) => {
    if (cur === "*") {
      acc.pop();
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  return modifiedChars.join("");
}
