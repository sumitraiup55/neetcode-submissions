class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for(let i = 0; i <s.length; i++){
            if(s[i]=="(" || s[i]=="{" || s[i]=="[" ){
                stack.push(s[i]);
            }else{
              let top = stack.pop();
            if(s[i]==")" && top=="("){
              continue
            }
            if(s[i]=="}" && top=="{"){
              continue
            }
            if(s[i]=="]" && top=="["){
              continue
            }else{
                return false
            }
            }
            
        }
        
        if(stack.length === 0){
            return true
        }else{
            return false
        }
    }
}
