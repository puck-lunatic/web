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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let result: number = 0;
  const traverse = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }
    const left: number = node.left && traverse(node.left) + 1;
    const right: number = node.right && traverse(node.right) + 1;
    result = Math.max(left + right, result);
    return Math.max(left, right);
  };
  traverse(root);
  return result;
}
