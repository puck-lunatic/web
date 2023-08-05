/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) {
    return [];
  }
  const gen = (start: number, end: number): Array<TreeNode | null> => {
    let result = [];
    if (start > end) {
      result.push(null);
      return result;
    }
    for (let i = start; i <= end; i++) {
      let lefts = gen(start, i - 1);
      let rights = gen(i + 1, end);
      for (const left of lefts) {
        for (const right of rights) {
          const node = new TreeNode(i, left, right);
          result.push(node);
        }
      }
    }
    return result;
  };

  return gen(1, n);
}
