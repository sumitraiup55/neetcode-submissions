/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let set = new Set();
        let point = head
        while(point !== null){
            if(set.has(point)){
                return true
            }else{
                set.add(point)
                point = point.next
            }
            
        }
        return false
    }
}
