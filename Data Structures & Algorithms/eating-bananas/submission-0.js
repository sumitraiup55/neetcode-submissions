class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h){

        let right = Math.max(...piles);
        let left = 1;
        let result = right;

        while(right >= left){

            let k = Math.floor((right + left) / 2);

            let time = 0;

            for(let i = 0; i < piles.length; i++){
                time += Math.ceil(piles[i] / k);
            }

            if(time > h){
                // k is too slow
                left = k + 1;
            }
            else{
                // k works, save it
                result = k;

                // try smaller speed
                right = k - 1;
            }
        }

        return result;
    }
}



