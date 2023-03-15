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

function isCompleteTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  const nodes = [root];
  while (nodes.length !== 0) {
    const length = nodes.length;
    let flag = false;
    for (let i = 0; i < length; i++) {
      const node = nodes.shift();
      if (!node.left && !node.right) {
        flag = true;
        continue;
      }
      if (flag) {
        return false;
      }
      if (node.left && node.right) {
        nodes.push(node.left);
        nodes.push(node.right);
        continue;
      }
      if (!node.left) {
        return false;
      }
      if (!node.right) {
        nodes.push(node.left);
        flag = true;
      }
    }
    if (flag && nodes.some((node) => node.left || node.right)) {
      return false;
    }
  }

  return true;
}
