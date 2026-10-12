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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        let pre = null
        let current = slow
        
        while(current !== null){
            let next = current.next

            current.next = pre

            pre = current
            current = next

        }

        let first = head
        let second = pre

        while(second.next !== null){
            let first1 = first.next
            let second2 = second.next

            first.next = second
            second.next = first1

            first =first1
            second = second2
        }

    
    }
       
}
