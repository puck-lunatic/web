/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
  const dfs = (
    a: number,
    b: number,
    c: number,
    d: number,
    grid: number[][]
  ): Node => {
    let zero: number = 0,
      one: number = 0;
    for (let i = a; i <= c; i++) {
      for (let j = b; j <= d; j++) {
        if (grid[i][j] === 0) {
          zero = 1;
        } else {
          one = 1;
        }
      }
    }
    const isLeaf: boolean = zero + one === 1;
    const val: boolean = isLeaf && one === 1;
    let node: Node = new Node(val, isLeaf);
    if (isLeaf) {
      return node;
    }
    node.topLeft = dfs(
      a,
      b,
      Math.floor((a + c) / 2),
      Math.floor((b + d) / 2),
      grid
    );
    node.topRight = dfs(
      a,
      Math.floor((b + d) / 2) + 1,
      Math.floor((a + c) / 2),
      d,
      grid
    );
    node.bottomLeft = dfs(
      Math.floor((a + c) / 2) + 1,
      b,
      c,
      Math.floor((b + d) / 2),
      grid
    );
    node.bottomRight = dfs(
      Math.floor((a + c) / 2) + 1,
      Math.floor((b + d) / 2) + 1,
      c,
      d,
      grid
    );
    return node;
  };

  return dfs(0, 0, grid.length - 1, grid[0].length - 1, grid);
}
