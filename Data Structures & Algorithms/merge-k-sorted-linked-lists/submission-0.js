
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].val <= this.heap[i].val) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) return null;

        let smallest = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallestIndex = i;

                if (
                    left < this.heap.length &&
                    this.heap[left].val <
                    this.heap[smallestIndex].val
                ) {
                    smallestIndex = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right].val <
                    this.heap[smallestIndex].val
                ) {
                    smallestIndex = right;
                }

                if (smallestIndex === i) break;

                [this.heap[i], this.heap[smallestIndex]] =
                    [this.heap[smallestIndex], this.heap[i]];

                i = smallestIndex;
            }
        }

        return smallest;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let minHeap = new MinHeap();

        // Step 1: Add the first node of every list
        for (let node of lists) {
            if (node !== null) {
                minHeap.push(node);
            }
        }

        // Step 2: Create the result linked list
        let dummy = new ListNode(-1);
        let current = dummy;

        // Step 3: Keep taking the smallest node
        while (!minHeap.isEmpty()) {
            let node = minHeap.pop();

            current.next = node;
            current = current.next;

            // Step 4: Add the next node from that list
            if (node.next !== null) {
                minHeap.push(node.next);
            }
        }

        current.next = null;

        return dummy.next;
    }
}
