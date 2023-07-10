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

function minDepth(root: TreeNode | null): number {
  let result = 0;
  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length > 0) {
    result += 1;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return result;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}
