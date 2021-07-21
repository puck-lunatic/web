impl Solution {
    pub fn push_dominoes(dominoes: String) -> String {
        let mut dot = 0;
        let mut right = false;
        let mut res = "".to_string();
        for c in dominoes.chars().chain("R".chars()) {
            match c {
                'R' => {
                    if dot > 0 {
                        if right {
                            for _ in 0..=dot {
                                res.push('R');
                            }
                        } else {
                            for _ in 0..dot {
                                res.push('.');
                            }
                        }
                        dot = 0;
                    } else {
                        if right {
                            res.push('R');
                        }
                    }
                    right = true;
                }
                'L' => {
                    if !right {
                        for _ in 0..1 + dot {
                            res.push('L');
                        }
                    } else {
                        for _ in 0..=dot / 2 {
                            res.push('R');
                        }
                        if dot % 2 == 1 {
                            res.push('.');
                        }
                        for _ in 0..=dot / 2 {
                            res.push('L');
                        }
                    }
                    right = false;
                    dot = 0;
                }
                _ => {
                    dot += 1;
                }
            }
        }
        res
    }
}
