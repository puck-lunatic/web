/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var digitalCalculate = (a, b, isCarryingFlag) => {
        return (a?.val !== undefined || b?.val !== undefined ) ? new ListNode(add(a?.val || 0, b?.val  || 0, isCarryingFlag), digitalCalculate(a?.next || undefined, b?.next || undefined, isCarrying(a?.val || 0, b?.val || 0, isCarryingFlag))) : isCarryingFlag ? new ListNode(1, undefined) : undefined;
    }
    
    var add = (a, b, isCarrying) => {
        var temp =  a + b + (isCarrying ? 1 : 0);
        return temp > 9 ? temp - 10 : temp;
    }
    
    var isCarrying = (a, b, flag) => {
        var temp =  a + b + (flag ? 1 : 0);
        return temp > 9;
    } 

    return new ListNode(add(l1.val, l2.val, false), digitalCalculate(l1.next, l2.next, isCarrying(l1.val, l2.val, false)));
};
