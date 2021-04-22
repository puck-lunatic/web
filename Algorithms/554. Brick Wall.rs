use std::collections::HashMap;

impl Solution {
    pub fn least_bricks(wall: Vec<Vec<i32>>) -> i32 {
//         let width = wall[0].iter().sum();
//         let mut res = 10001;
//         for i in 1..width {
//             let mut temp = 0;
//             for j in 0..wall.len() {
//                 let bricks = wall[j].len() - 1;
//                 let mut temp_len = i;
//                 for k in 0..bricks {
//                     temp_len -= wall[j][k];
//                     // println!("{} {} {}", temp_len, wall[j][k], j);
//                     if temp_len == 0 {
//                         break;
//                     } else if temp_len > 0 {
//                         continue;
//                     } else {
//                         temp += 1;
//                         break;
//                     }
//                 }
//                 if temp_len > 0 {
//                     temp += 1;
//                 }
//             }
            
//             if temp < res {
//                 res = temp;
//             }
//         }
//         if res == 10001 {
//             return wall.len() as i32;
//         }
//         res
        let n = wall.len();
        let w: i32 = wall[0].iter().sum();
        let mut hm: HashMap<i32, usize> = HashMap::new();
        for row in wall {
            let mut sum = 0;
            for x in row {
                sum += x;
                *hm.entry(sum).or_default() += 1;
            }
        }
        let mut max = 0;
        for (k, v) in hm {
            if k != w {
                max = max.max(v);
            }
        }
        (n - max) as i32
    }
}
