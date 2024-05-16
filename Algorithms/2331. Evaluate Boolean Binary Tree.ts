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

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) {
    throw new Error("error");
  }
  const traverse = (node: TreeNode): boolean => {
    const value = node.val;
    if (value === 0) {
      return false;
    } else if (value === 1) {
      return true;
    } else if (value === 2) {
      return traverse(node.left) || traverse(node.right);
    } else if (value === 3) {
      return traverse(node.left) && traverse(node.right);
    } else {
      throw new Error("error");
    }
  };
  return traverse(root);
}
