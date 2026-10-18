class Solution {
    lengthOfLongestSubstring(s) {
        let array = [];
        let result = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (!array.includes(s[r])) {
                array.push(s[r]);
                r++;
                result = Math.max(result, array.length);
            } else {
                array.shift();
                l++;
            }
        }

        return result;
    }
}