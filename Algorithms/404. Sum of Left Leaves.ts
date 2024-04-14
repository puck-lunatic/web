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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }
  let result = 0;
  const q = [root];
  while (q.length > 0) {
    const n = q.length;
    for (let i = 0; i < n; i++) {
      const node = q.shift();
      if (node.left) {
        if (!node.left.left && !node.left.right) {
          result += node.left.val;
        } else {
          q.push(node.left);
        }
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }

  const queue = [root];

  return result;
}
