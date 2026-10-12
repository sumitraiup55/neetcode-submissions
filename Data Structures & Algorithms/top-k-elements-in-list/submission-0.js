class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap = new Map();
        
        for(let i=0; i< nums.length; i++){
           if(  hashmap.has(nums[i])){
            hashmap.set(nums[i], hashmap.get(nums[i]) +1)
           }else{
            hashmap.set(nums[i], 1)
           }
        }
        let result = Array.from(hashmap).sort((a,b) =>b[1]-a[1]);
        let answer =[]
        for(let i=0; i <k; i++){
           answer.push(result[i][0])
        }
        return answer

        
    }
}
