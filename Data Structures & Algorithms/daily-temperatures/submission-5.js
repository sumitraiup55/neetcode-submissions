// class Solution {
//     /**
//      * @param {number[]} temperatures
//      * @return {number[]}
//      */
//     dailyTemperatures(temperatures) {
//         let arr= temperatures;
//         let result = []
//         for(let i =0; i < arr.length; i++){
//             let exists = arr.slice(i).some(x => x > arr[i]);
//                 if(exists == true){
//                     for(let j = i+1; j < arr.length; j++){
//                         if(arr[j] > arr[i]){
//                             result.push(j-i)
//                             break;
//                         }
//                     }
                   
//                 }else{
//                     result.push(0)
//                 }
//         }
//         return result
//     }
// }

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let stack = [];
        let result = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {

            while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                let index = stack.pop();
                result[index] = i - index;
            }

            stack.push(i);
        }

        return result;
    }
}