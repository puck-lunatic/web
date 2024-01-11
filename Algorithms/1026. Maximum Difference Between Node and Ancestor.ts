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

function maxAncestorDiff(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, min: number, max: number): void => {
    if (!node) {
      return;
    }
    result = Math.max(
      result,
      Math.abs(node.val - min),
      Math.abs(node.val - max)
    );
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    dfs(node.left, min, max);
    dfs(node.right, min, max);
  };
  let result = 0;
  dfs(root, root.val, root.val);
  return result;
}
