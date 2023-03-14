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

function sumNumbers(root: TreeNode | null): number {
  const dfs = (s: string, node: TreeNode) => {
    if (!node) {
      return s === "" ? 0 : Number(s);
    }
    if (!node.left) {
      return dfs(`${s}${node.val}`, node.right);
    }
    if (!node.right) {
      return dfs(`${s}${node.val}`, node.left);
    }

    return (
      dfs(`${s}${node.val}`, node.left) + dfs(`${s}${node.val}`, node.right)
    );
  };

  return dfs("", root);
}
