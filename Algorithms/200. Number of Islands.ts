function numIslands(grid: string[][]): number {
    let result = 0;
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                result += 1;
                grid[i][j] = '2';
                const queue = [[i, j]];
                while (queue.length > 0) {
                    const [x, y] = queue.shift();
                    if (x > 0 && grid[x - 1][y] === '1') {
                        grid[x - 1][y] = '2';
                        queue.push([x - 1, y]);
                    }
                    if (y > 0 && grid[x][y - 1] === '1') {
                        grid[x][y - 1] = '2';
                        queue.push([x, y - 1]);
                    }
                    if (x < m - 1 && grid[x + 1][y] === '1') {
                        grid[x + 1][y] = '2';
                        queue.push([x + 1, y]);
                    }
                    if (y < n - 1 && grid[x][y + 1] === '1') {
                        grid[x][y + 1] = '2';
                        queue.push([x, y + 1]);
                    }
                }
            }
        }
    }

    return result;
};
