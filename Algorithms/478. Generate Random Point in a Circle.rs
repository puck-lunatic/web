use rand::Rng;

struct Solution {
    radius: f64,
    x_center: f64,
    y_center: f64,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(radius: f64, x_center: f64, y_center: f64) -> Self {
        Self {
            radius: radius,
            x_center: x_center,
            y_center: y_center,
        }
    }
    
    fn rand_point(&self) -> Vec<f64> {
        let mut point: Vec<f64> = Vec::new();
        let mut flag: bool = false;
        
        let x_lrange = self.x_center - self.radius;
        let x_rrange = self.x_center + self.radius;
        
        let y_lrange = self.y_center - self.radius;
        let y_rrange = self.y_center + self.radius;
        
        while !flag {
            let mut rng = rand::thread_rng();
            
            let x = rng.gen_range(x_lrange, x_rrange);
            let y = rng.gen_range(y_lrange, y_rrange);
            
            if ((x - self.x_center).powi(2) + (y - self.y_center).powi(2)).sqrt() <= self.radius {
                point.push(x);
                point.push(y);
                flag = true;
            }
        }
        
        point
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(radius, x_center, y_center);
 * let ret_1: Vec<f64> = obj.rand_point();
 */
 