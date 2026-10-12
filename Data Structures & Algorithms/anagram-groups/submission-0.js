class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = strs.map(str => str.split("").sort().join(""));
        let hashmap= new Map();
        for(let i= 0; i<sorted.length; i++){
            if(hashmap.has(sorted[i])){
                hashmap.get(sorted[i]).push(strs[i])
            }else{
                hashmap.set(sorted[i], [strs[i]])
            }
            
        }
        let result = Array.from(hashmap.values());
        return result;
        

    }
}
