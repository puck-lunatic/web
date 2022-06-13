use std::cmp;

impl Solution {
    pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
        if triangle.len() == 1 { return triangle[0][0]; }
        
        let length = triangle.len();
        
        let mut result = vec![];
        result.push(vec![triangle[0][0]]);
        
        for i in 1..length {
            let mut layer = vec![];
            let tempLength = triangle[i].len();
            for j in 0..tempLength {
                if j == 0 {
                    layer.push(triangle[i][j] + result[i - 1][j]);
                } else if j == tempLength - 1 {
                    layer.push(triangle[i][j] + result[i - 1][j - 1]);
                } else {
                    layer.push(triangle[i][j] + cmp::min(result[i - 1][j - 1], result[i - 1][j]));
                }
            }
            
            result.push(layer);
        }
        // println!("{}, {}", result[2][0], result[2][1]);
        *result[length - 1].iter().min().unwrap()
    }
}

// By using Backtrack way, we'll get "Time Limit Exceeded"
impl Solution2 {
    pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
        if triangle.len() == 1 {
            return triangle[0][0];
        }

        Solution::left_or_right(&triangle, 0, 0, triangle[0][0])
    }

    fn left_or_right(triangle: &Vec<Vec<i32>>, index: usize, layer: usize, acc: i32) -> i32 {
        if triangle.len() == layer + 2 {
            return cmp::min(
                acc + triangle[layer + 1][index],
                acc + triangle[layer + 1][index + 1],
            );
        }
        cmp::min(
            Solution::left_or_right(triangle, index, layer + 1, acc + triangle[layer + 1][index]),
            Solution::left_or_right(
                triangle,
                index + 1,
                layer + 1,
                acc + triangle[layer + 1][index + 1],
            ),
        )
    }
}
