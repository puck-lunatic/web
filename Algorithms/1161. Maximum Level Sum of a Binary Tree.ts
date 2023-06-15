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

function maxLevelSum(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  const queue: TreeNode[] = [root];
  let result = 0;
  let layer = 0;
  while (queue.length > 0) {
    const n = queue.length;
    let sum = 0;
    layer += 1;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (sum > max) {
      result = layer;
      max = sum;
    }
  }
  return result;
}
