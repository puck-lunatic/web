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

function widthOfBinaryTree(root: TreeNode | null): number {
  let result = 0;
  const t: number[] = [0];
  const dfs = (node: TreeNode | null, depth: number, i: number) => {
    if (!node) {
      return;
    }
    if (t[depth] === undefined) {
      t.push(i);
    }

    let diff = i - t[depth];
    result = Math.max(result, diff + 1);

    dfs(node.left, depth + 1, diff * 2);
    dfs(node.right, depth + 1, diff * 2 + 1);
  };
  dfs(root, 0, 0);
  return result;
}
