function mostPoints(questions: number[][]): number {
  const dfs = (i: number): number => {
    if (i >= questions.length) {
      return 0;
    }

    return Math.max(questions[i][0] + dfs(i + questions[i][1] + 1), dfs(i + 1));
  };

  return dfs(0);
}
