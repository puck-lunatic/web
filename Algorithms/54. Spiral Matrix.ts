function spiralOrder(matrix: number[][]): number[] {
    enum Direction {
        Right,
        Down,
        Left,
        Up,
    }
    const m: number = matrix.length;
    const n: number = matrix[0].length;
    const result: number[] = [];
    let i: number = 0;
    let j: number = 0;
    let left: number = 0;
    let top: number = 0;
    let bottom: number = m - 1;
    let right: number = n - 1;
    let direction: Direction = Direction.Right;

    // Process Start.
    while (true) {
        result.push(matrix[i][j]);
        if (direction === Direction.Right) {
            if (j < right) {
                j += 1;
            } else {
                if (top < bottom) {
                    top += 1;
                    direction = Direction.Down;
                    i += 1;
                } else {
                    break;
                }
            }
            continue;
        }

        if (direction === Direction.Down) {
            if (i < bottom) {
                i += 1;
            } else {
                if (left < right) {
                    right -= 1;
                    direction = Direction.Left;
                    j -= 1;
                } else {
                    break;
                }
            }
            continue;
        }

        if (direction === Direction.Left) {
            if (j > left) {
                j -= 1;
            } else {
                if (top < bottom) {
                    bottom -= 1;
                    direction = Direction.Up;
                    i -= 1;
                } else {
                    break;
                }
            }
            continue;
        }

        if (direction === Direction.Up) {
            if (i > top) {
                i -= 1;
            } else {
                if (left < right) {
                    left += 1;
                    direction = Direction.Right;
                    j += 1;
                } else {
                    break;
                }
            }
            continue;
        }
    };

    return result;
};
