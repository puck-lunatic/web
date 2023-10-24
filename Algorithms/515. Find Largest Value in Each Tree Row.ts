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

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const result: number[] = [];
  const queue = [root];
  while (queue.length !== 0) {
    const n = queue.length;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }

  return result;
}
