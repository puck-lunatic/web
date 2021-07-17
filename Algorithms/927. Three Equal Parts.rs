impl Solution {
    pub fn three_equal_parts(arr: Vec<i32>) -> Vec<i32> {
        let ones = arr.iter().filter(|&n| *n == 1).count();
        if ones % 3 != 0 { return vec![-1, -1]; }
        if ones == 0 { return vec![0, 2]; }
        let part_ones = ones / 3;
        let trailing_zeros = (0..arr.len()).rev().take_while(|&idx| arr[idx] == 0).count();

        let find_part_end = |start| -> Option<usize> {
            let mut ones = 0;
            let mut i = start;
            while ones < part_ones {
                if arr[i] == 1 {
                    ones += 1;
                }
                i += 1;
            }
            if !(i..(i+trailing_zeros)).all(|idx| arr[idx] == 0) {
                return None;
            }
            Some(i + trailing_zeros - 1)
        };

        let i = match find_part_end(0) {
            Some(i) => i,
            None => return vec![-1, -1],
        };

        let j = match find_part_end(i+1) {
            Some(j) => j + 1,
            None => return vec![-1, -1],
        };

        if !(0..i+1).rev().zip((i+1..j).rev()).all(|t| arr[t.0] == arr[t.1]) {
            return vec![-1, -1];
        }

        if !(i+1..j).rev().zip((j..arr.len()).rev()).all(|t| arr[t.0] == arr[t.1]) {
            return vec![-1, -1];
        }

        vec![i as i32, j as i32]
    }
}
