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

function isEvenOddTree(root: TreeNode | null): boolean {
  let flag = 0;
  const q: TreeNode[] = [root];
  if (root.val % 2 === 0) {
    return false;
  }
  while (q.length > 0) {
    if (q.length > 1) {
      if (
        !q.every((e, i) => {
          if (i === 0) {
            return e.val % 2 !== flag % 2;
          }
          if (flag % 2 === 0) {
            return e.val % 2 === 1 && e.val > q[i - 1].val;
          } else {
            return e.val % 2 === 0 && e.val < q[i - 1].val;
          }
        })
      ) {
        return false;
      }
    } else if (q.length === 1) {
      if (q[0].val % 2 === flag % 2) {
        return false;
      }
    }
    flag += 1;
    const n = q.length;
    for (let i = 0; i < n; i++) {
      const node = q.shift();
      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }
  }

  return true;
}
