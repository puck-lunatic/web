impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        let mut arr = vec![0, 1, 1];
        if n < 3 {
            return arr[n as usize];
        }

        for i in 3..=n {
            let temp = i as usize;
            arr.push(arr[temp - 3] + arr[temp - 2] + arr[temp - 1]);
        }

        arr[n as usize]
    }
}
