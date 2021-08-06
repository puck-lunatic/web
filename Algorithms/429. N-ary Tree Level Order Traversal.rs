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

function levelOrder(root: Node | null): number[][] {
	let res = [];
    let temp = [];
    if (root == null) {
        return res;
    } else {
        temp.push(root);
    }

    while(temp.length != 0 ) {
        let len = temp.length;
        let arr = [];
        for (let i = 0; i < len; i ++) {
            let node = temp.shift();
            arr.push(node.val);
            // console.log(node.children);
            temp = temp.concat(node.children);
            // console.log(temp);
        }
        res.push(arr);
    }

    return res;

};