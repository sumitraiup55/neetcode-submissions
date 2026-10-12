class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length ===0){
            return "";
        }
        let size =[];
        let parts = [];
        for(let s of strs){
            size.push(s.length);
        }
        for( let sz of size){
            parts.push(String(sz), ',');
        }
        // for(let s of strs){
        //     parts.push(String(s.length), ',');
        // }


        parts.push('#', ...strs);
        return parts.join('');

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return[];
        let sizes = [];
        let res = [];
        let i = 0;
        while (str[i] !== '#'){
            let j = i;
            while (str[j] !== ',') {
                j++
            }
            sizes.push(parseInt(str.substring(i, j), 10));
            i = j+1;
        }
        i++;
        for(let sz of sizes){
            res.push(str.substr(i,sz));
            i += sz;
        }
        return res;
    }
}
