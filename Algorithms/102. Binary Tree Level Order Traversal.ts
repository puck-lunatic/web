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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const result: number[][] = [];
    const nodes: TreeNode[] = new Array(root);
    while (nodes.length !== 0) {
        const len: number = nodes.length;
        const temp: number[] = new Array();
        for (let i = 0; i < len; i++) {
            const node: TreeNode = nodes.shift();
            temp.push(node.val);
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }
        result.push(temp);
    }

    return result;
};
