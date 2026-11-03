
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) {
            return false;
        }

        // Store frequency of s1
        let map1 = new Map();

        for (let i = 0; i < s1.length; i++) {
            map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
        }

        let Size = s1.length;
        let map2 = new Map();

        let left = 0;

        for (let right = 0; right < s2.length; right++) {

            // Add current character
            let ch = s2[right];

            map2.set(ch, (map2.get(ch) || 0) + 1);

            // Check when window size becomes Size
            if (right - left + 1 === Size) {

                // Compare both Maps
                let isMatch = true;

                if (map1.size !== map2.size) {
                    isMatch = false;
                } else {
                    for (let [key, value] of map1) {
                        if (map2.get(key) !== value) {
                            isMatch = false;
                            break;
                        }
                    }
                }

                // If both Maps match
                if (isMatch) {
                    return true;
                }

                // Remove leftmost character
                let leftChar = s2[left];

                map2.set(leftChar, map2.get(leftChar) - 1);

                if (map2.get(leftChar) === 0) {
                    map2.delete(leftChar);
                }

                left++;
            }
        }

        return false;
    }
}
