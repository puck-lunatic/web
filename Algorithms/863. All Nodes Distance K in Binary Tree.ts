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

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  const childParentMap: Map<TreeNode, TreeNode> = new Map();
  const visited: Map<TreeNode, boolean> = new Map();
  let result: number[] = [];
  const findParent = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    if (node.left) {
      childParentMap.set(node.left, node);
      findParent(node.left);
    }

    if (node.right) {
      childParentMap.set(node.right, node);
      findParent(node.right);
    }
  };

  const dfs = (node: TreeNode, k: number) => {
    if (visited.get(node)) {
      return;
    }
    visited.set(node, true);
    if (k === 0) {
      result.push(node.val);
      return;
    }
    if (node.left) {
      dfs(node.left, k - 1);
    }
    if (node.right) {
      dfs(node.right, k - 1);
    }
    const parent = childParentMap.get(node);
    if (parent) {
      dfs(parent, k - 1);
    }
  };

  // if(!root) {
  //     return [];
  // }
  findParent(root);
  dfs(target, k);
  return result;
}
