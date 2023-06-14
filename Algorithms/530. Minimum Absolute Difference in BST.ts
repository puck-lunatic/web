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

function getMinimumDifference(root: TreeNode | null): number {
  const nums: number[] = [];
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      nums.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  nums.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    result = Math.min(result, nums[i] - nums[i - 1]);
  }
  return result;
}
