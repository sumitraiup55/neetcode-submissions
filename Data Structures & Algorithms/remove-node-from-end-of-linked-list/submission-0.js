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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let a1 = head
        let a2 = head
        for(let i = 1; i <= n; i++){
            a2 = a2.next
        }

         // we need to remove the first node
        if (a2 === null) {
            return head.next;
        }


        while(a2.next !== null){
             a1 = a1.next
             a2 = a2.next
        }

    
        a1.next = a1.next.next

        return head
    }
}
