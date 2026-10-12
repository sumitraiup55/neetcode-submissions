class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
            let n = heights.length;
            let result=0
            let ps = new Array(n).fill(0);
            let stack1= []
            for(let i =0; i < n;  i++){
                if(stack1.length ===0){
                    stack1.push(i)
                    ps[i]= -1
                }else{
                    if(heights[i] <= heights[stack1[stack1.length-1]]){
                        while(stack1.length !== 0 && heights[i] <= heights[stack1[stack1.length-1]]){
                              stack1.pop()
                        }
                        if(stack1.length ===0){
                            stack1.push(i)
                            ps[i]= -1
                        }else{
                           ps[i]=stack1[stack1.length-1] 
                           stack1.push(i)
                        }
                        
                    }else{
                        ps[i]= stack1[stack1.length-1];
                        stack1.push(i)
                    }
                }
            }


            let ns = new Array(n).fill(0);
            let stack2 = []
            for(let i = n-1; i >= 0; i--){
                if(stack2.length== 0){
                    stack2.push(i)
                    ns[i] = n
                }else{
                    if(heights[i] <= heights[stack2[stack2.length-1]]){
                        while(stack2.length !== 0 && heights[i] <= heights[stack2[stack2.length-1]]){
                            stack2.pop()
                        }
                        if(stack2.length== 0){
                          stack2.push(i)
                          ns[i] = n
                        }else{
                             ns[i] = stack2[stack2.length-1];
                             stack2.push(i)
                        }
                        
                    }else{
                        ns[i] = stack2[stack2.length-1];
                        stack2.push(i)
                    }
                }
            }
            for(let i =0; i <n ; i++){
                result = Math.max(result, heights[i]*(ns[i]-ps[i]-1))
            }
            return result
            



    }
}
