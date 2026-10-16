class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0
        let sell = 1
        let profit = 0
        let n = prices.length
        while(sell !== n){
            if(prices[buy] <= prices[sell]){
                profit = Math.max(profit, (prices[sell] - prices[buy]))
                sell ++
            }else if(prices[buy] > prices[sell]){
                   buy = sell
                   sell++
            }else{
                buy++
                sell++
            }
        }
        return profit
    }
}
