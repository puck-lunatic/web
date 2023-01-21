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

function isValidBST(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    const queue = [{ node: root, min: null, max: null }];
    while (queue[0]) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const { node, min, max } = queue.shift();
            if (min !== null && min >= node.val) {
                return false;
            }
            if (max !== null && max <= node.val) {
                return false;
            }
            node.left && queue.push({ node: node.left, min, max: node.val });
            node.right && queue.push({ node: node.right, min: node.val, max });
        }
    }

    return true;
};
