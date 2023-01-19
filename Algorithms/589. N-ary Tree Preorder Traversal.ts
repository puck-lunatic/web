/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    if (!root) {
        return [];
    }
    const result: number[] = [];
    let nodes: Node[] = new Array(root);
    while (nodes.length !== 0) {
        const temp: Node = nodes.shift();
        result.push(temp.val);
        nodes = temp.children.concat(nodes);
    }
    return result;
};
