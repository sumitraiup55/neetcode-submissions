class Solution {
//     /**
//      * @param {number[]} temperatures
//      * @return {number[]}
//      */
     dailyTemperatures(temperatures) {
        let arr = temperatures
        let stack =[];
        let n = arr.length;
        let result =new Array(n).fill(0);

        for (let i =n-1; i >= 0; i--){
           while(stack.length !== 0 && arr[i] >= arr[stack[stack.length-1]]){
            stack.pop()
           }
           if(stack.length === 0){
            stack.push(i)
            result[i] = 0
           }else{
            
            result[i]=stack[stack.length-1] -i
            stack.push(i);
           }
            

        }
        return result
     }
}
