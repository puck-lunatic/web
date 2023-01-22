function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const m: number = image.length;
    const n: number = image[0].length;
    const originalColor: number = image[sr][sc];
    if (originalColor === color) {
        return image;
    }
    // const renderedPixiels: Set<string> = new Set();
    const renderQueue = new Array([sr, sc]);
    while (renderQueue.length > 0) {
        const [x, y] = renderQueue.shift();
        // renderedPixiels.add(pixel);
        image[x][y] = color;
        if (x > 0 && image[x - 1][y] === originalColor) {
            renderQueue.push([x - 1, y]);
        }
        if (y > 0 && image[x][y - 1] === originalColor) {
            renderQueue.push([x, y - 1]);
        }
        if (x < (m - 1) && image[x + 1][y] === originalColor) {
            renderQueue.push([x + 1, y]);
        }
        if (y < (n - 1) && image[x][y + 1] === originalColor) {
            renderQueue.push([x, y + 1]);
        }
    }
    return image;
};
