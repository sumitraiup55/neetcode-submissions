class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let f;
        let s;
        for(let i=0; i<nums.length; i++){
            for(let j =0; j<nums.length; j++){
               if(nums[i]+nums[j]==target && i != j){
                return [i,j]
               }
            }
        }
    }
}
