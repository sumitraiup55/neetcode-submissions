class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack =[];
        for(let x of tokens){
            if(x == "+"){
               stack.push((stack.pop() + stack.pop()))
            }
            else if(x == "-"){
               let a = stack.pop()
               let b = stack.pop() 
               stack.push((b-a))
            }
            else if(x == "*"){
                stack.push((stack.pop() * stack.pop()))
                
            }
            else if(x == "/"){
                let a = stack.pop()
                let b = stack.pop() 
                stack.push(Math.trunc(b/a))
                
            }
            else{
                stack.push(Number(x))
            }
        }
        let output = stack.pop()
        // return (stack[0])
        return output
    }
}
