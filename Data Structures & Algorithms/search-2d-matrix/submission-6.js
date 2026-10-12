class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = 0;
        let col = 0
        let length = matrix[0].length -1;
        


        while(col <= length){


            let mid = Math.floor((col+length) /2);
            if(target === matrix[row][mid]){
                return true
            }else if(target < matrix[row][mid]){
                length = mid-1
            }else if(target >  matrix[row][mid] && target <= matrix[row][matrix[row].length-1]){
                col = mid+1;
            }else if(row < matrix.length-1){
                row += 1
                col = 0;
                length = matrix[0].length -1
            }else{
                return false
            }
        }
        return false
        
    }
}
