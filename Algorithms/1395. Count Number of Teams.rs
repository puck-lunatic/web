impl Solution {
    pub fn num_teams(rating: Vec<i32>) -> i32 {
        let mut res = 0;
        let length = rating.len();
        for i in 0..length - 2 {
            for j in (i+1)..length - 1 {
                if rating[i] < rating[j] { continue; }
                for k in (j+1)..length {
                    if rating[j] > rating[k] {
                        // println!("{},{},{}", rating[i],rating[j],rating[k]);
                        res += 1;
                    }
                }
            }
        }
        
        for i in 0..length - 2 {
            for j in (i+1)..length - 1 {
                if rating[i] > rating[j] { continue; }
                for k in (j+1)..length {
                    if rating[j] < rating[k] {
                        // println!("{},{},{}", rating[i],rating[j],rating[k]);
                        res += 1;
                    }
                }
            }
        }
        
        
        res
    }
}
