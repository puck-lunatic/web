impl Solution {
    pub fn max_area(h: i32, w: i32, horizontal_cuts: Vec<i32>, vertical_cuts: Vec<i32>) -> i32 {
        let mut horizontal_cuts = horizontal_cuts;
        horizontal_cuts.push(0);
        horizontal_cuts.push(h);
        horizontal_cuts.sort();
        let mut vertical_cuts = vertical_cuts;
        vertical_cuts.push(0);
        vertical_cuts.push(w);
        vertical_cuts.sort();
        let horizontal_max = horizontal_cuts.windows(2).map(|x| x[1] - x[0]).max().unwrap() as i64;
        let vertical_max = vertical_cuts.windows(2).map(|x| x[1] - x[0]).max().unwrap() as i64;
        let div: i64 = 1_000_000_007;
        (horizontal_max*vertical_max%div) as i32
    }
}
