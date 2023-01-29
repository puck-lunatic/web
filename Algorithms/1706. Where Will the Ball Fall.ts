function findBall(grid: number[][]): number[] {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const res: number[] = Array(n).fill(0).map((_, i) => i);
    // row iterator
    for (let i = 0; i < m; i++) {
        // current position iterator
        for (let j = 0; j < n; j++) {
            if (res[j] === -1) {
                continue;
            }
            const curCol: number = res[j];
            if (grid[i][curCol] === 1) {
                if (curCol === n - 1 || grid[i][curCol + 1] === -1) {
                    res[j] = -1;
                } else {
                    res[j] = res[j] + 1;
                }
                continue;
            }

            if (grid[i][curCol] === -1) {
                if (curCol === 0 || grid[i][curCol - 1] === 1) {
                    res[j] = -1;
                } else {
                    res[j] = res[j] - 1;
                }
                continue;
            }
        }
    }

    return res;
};
