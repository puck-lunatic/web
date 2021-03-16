use std::cmp;

impl Solution {
    pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
        let mut cash: i32 = 0;
        let mut hold: i32 =  - prices[0];
        let length: usize = prices.len();
        
        for i in 0..length{
            cash = cmp::max(cash, hold + prices[i] - fee);
            hold = cmp::max(hold, cash - prices[i]);
        }
        
        cash
    }
}
