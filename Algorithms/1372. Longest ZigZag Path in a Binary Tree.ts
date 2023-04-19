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

function longestZigZag(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let result: number = 0;
  const dfs = (node: TreeNode | nulÏl, left: number, right: number) => {
    if (!node) {
      return;
    }
    Ï;
    result = Math.max(result, left, right);
    dfs(node.left, right + 1, 0);
    dfs(node.right, 0, left + 1);
  };

  dfs(root, 0, 0);
  return result;
}
