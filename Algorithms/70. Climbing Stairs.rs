impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        if n == 2 { return 2; }
        if n == 1 { return 1; }
        // Recursion: Time Limit Exceeded..
        // Self::climb_stairs(n - 1) + Self::climb_stairs(n - 2)
        
        let mut solutions = Vec::new();
        for i in 0..n {
            if i == 0 { solutions.push(1); }
            else if i == 1 { solutions.push(2); }
            else { solutions.push(solutions[(i - 1) as usize] + solutions[(i - 2) as usize]); }
        }
        solutions[solutions.len()-1]
    }
}
