impl Solution {
    pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
        let mut result: Vec<i32> = Vec::new();

        for &asteroid in asteroids.iter() {
            if asteroid > 0 || result.len() == 0 || result[result.len() - 1] < 0 {
                result.push(asteroid);
            } else {
                let mut i = result.len() - 1;
                while i >= 0 {
                    if result[i] < 0 {
                        result.push(asteroid);
                        break;
                    } else {
                        let last = result.last().unwrap();
                        if *last > asteroid.abs() {
                            break;
                        } else if *last == asteroid.abs() {
                            result.pop();
                            break;
                        } else {
                            result.pop();
                            if i == 0 {
                                result.push(asteroid);
                                break;
                            }
                            i -= 1;
                        }
                    }
                }
            }
        }
        result
    }
}
