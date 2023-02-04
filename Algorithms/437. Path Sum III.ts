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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  const traverse = (root: TreeNode | null, targetSum: number): number => {
    if (!root) {
      return 0;
    }
    let result: number = 0;
    if (root.val === targetSum) {
      result += 1;
    }
    result += traverse(root.left, targetSum - root.val);
    result += traverse(root.right, targetSum - root.val);
    return result;
  };
  return (
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum) +
    traverse(root, targetSum)
  );
}
