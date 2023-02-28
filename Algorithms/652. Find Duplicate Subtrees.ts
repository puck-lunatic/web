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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const map: Map<string, number> = new Map();
  const result: TreeNode[] = [];
  const traverse = (node: TreeNode | null): string => {
    if (node === null) {
      return "#";
    }
    const { val, left, right } = node;
    const s: string = `${val},${traverse(left)},${traverse(right)}`;
    map.set(s, (map.get(s) ?? 0) + 1);
    if (map.get(s) === 2) {
      result.push(node);
    }
    return s;
  };
  traverse(root);
  return result;
}
