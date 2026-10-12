class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let indices = position.map((value, index)=> index).sort((a,b)=>position[a]-position[b]);
        for(let i =0; i< indices.length; i++){
            let dis = target- position[indices[i]]
            // let result = Math.ceil(dis/speed[indices[i]])
            let result = (dis/speed[indices[i]])
            if(stack.length === 0){
                stack.push(result)
            }else if(result >= stack[stack.length-1]){
                while(result >= stack[stack.length-1]){
                    stack.pop()
                }
                stack.push(result)
            }else{
                stack.push(result)
            }
        }
        let output=stack.length
        return output
    }
    
}
