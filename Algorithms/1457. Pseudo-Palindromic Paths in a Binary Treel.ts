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

function pseudoPalindromicPaths(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, mask: number): number => {
    if (!node) {
      return 0;
    }
    mask ^= 1 << node.val;
    if (!node.left && !node.right) {
      return (mask & (mask - 1)) === 0 ? 1 : 0;
    }
    return dfs(node.left, mask) + dfs(node.right, mask);
  };
  return dfs(root, 0);
}
