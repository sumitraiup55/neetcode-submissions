class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = nums.sort((a, b) => a - b);
        if(sorted.length === 0){
            return 0
        }
        let f = 1;
        let s= 1;
        let temp = sorted[0];
        for(let i = 1;  i < sorted.length; i++){
             
            if(temp +1 == sorted[i]){
              f = f+1;
              temp = sorted[i]
            }if(temp == sorted[i]){
                continue;
            }else{
                temp = sorted[i]
                if (f > s) {    
                  s = f  
                }
                f = 1 
            }
        }
        if(f > s) {
            return f
        }else{
            return s
        }
    }
}
