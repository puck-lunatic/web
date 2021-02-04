use std::cmp;

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let days = prices.len() as usize;
        if days == 1 { return 0; }
        let mut results = vec![0];
        let mut max_profit = 0;
        
        for i in 1..days {
            results.push(cmp::max((prices[i] - prices[i - 1]) + results[i - 1], 0));
            max_profit = cmp::max(max_profit, results[i]);
        }
        
        max_profit
    }
}
