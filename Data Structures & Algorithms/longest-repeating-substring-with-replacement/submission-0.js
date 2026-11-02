class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let map = new Map();

        let left = 0;
        let maxFreq = 0;
        let result = 0;

        for (let right = 0; right < s.length; right++) {

            // Increase current character frequency
            let ch = s[right];

            map.set(ch, (map.get(ch) || 0) + 1);

            // Find maximum frequency in current window
            maxFreq = Math.max(maxFreq, map.get(ch));

            // Check if window is invalid
            while ((right - left + 1) - maxFreq > k) {

                let leftChar = s[left];

                map.set(leftChar, map.get(leftChar) - 1);

                left++;
            }

            // Update result
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}