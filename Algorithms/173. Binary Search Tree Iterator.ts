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

class BSTIterator {
  constructor(root: TreeNode | null) {
    if (!root) {
      return;
    }
    const traverse = (node: TreeNode) => {
      if (node.left) {
        traverse(node.left);
      }
      this.arr.push(node);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(root);
  }

  arr: TreeNode[] = [];

  next(): number {
    return this.arr.shift().val;
  }

  hasNext(): boolean {
    return this.arr.length !== 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
