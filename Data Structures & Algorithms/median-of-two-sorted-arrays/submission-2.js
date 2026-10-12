class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
         for(let i =0; i< nums2.length; i++){
            nums1.push(nums2[i])
         }
         nums1.sort((a,b) => a-b);
         
         if(nums1.length === 1){
            return nums1[0]
         }else if(nums1.length%2 !==0 ){
           let mid = Math.ceil(nums1.length/2)
           return nums1[mid-1]
         }else{
            let mid = nums1.length/2
            let diff =  (nums1[mid]- nums1[mid-1])/2
            return (nums1[mid-1]+diff)
         }
    }
}
