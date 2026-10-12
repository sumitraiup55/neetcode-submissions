class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        let ans = false;
        for(let i = 0; i < s.length; i++){
             ans= false;
           for(let j = 0; j < t.length; j++){
              if(s[i]==t[j]){
                t = t.slice(0,j) + t.slice(j+1);
                ans = true
                break;
              }
           }
           if (ans == false){
            return false;
           }

        }
        if(ans == true){
            return true;
        }
        // }else{
        //     return false
        // }
    }
}
