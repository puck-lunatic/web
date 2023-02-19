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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  let queue: TreeNode[] = [root];
  let layer: number = 1;
  while (queue.length !== 0) {
    const n: number = queue.length;
    const arr: number[] = [];
    const newQueue: TreeNode[] = [];
    for (let i = 0; i < n; i++) {
      const node: TreeNode = layer % 2 === 0 ? queue.pop() : queue.shift();
      arr.push(node.val);
      if (layer % 2 === 0) {
        if (node.right) {
          newQueue.unshift(node.right);
        }
        if (node.left) {
          newQueue.unshift(node.left);
        }
      } else {
        if (node.left) {
          newQueue.push(node.left);
        }
        if (node.right) {
          newQueue.push(node.right);
        }
      }
    }
    result.push([...arr]);
    queue = newQueue;
    layer++;
  }
  return result;
}
