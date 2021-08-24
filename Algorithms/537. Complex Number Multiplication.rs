impl Solution {
    pub fn complex_number_multiply(num1: String, num2: String) -> String {
        let leftNum = num1.trim_end_matches("i").split('+').collect::<Vec<&str>>();
        let rightNum = num2.trim_end_matches("i").split('+').collect::<Vec<&str>>();

        let leftReal = leftNum[0].parse::<i32>().unwrap();
        let leftImg = leftNum[1].parse::<i32>().unwrap();
        let rightReal = rightNum[0].parse::<i32>().unwrap();
        let rightImg = rightNum[1].parse::<i32>().unwrap();

        format!("{}+{}i", (leftReal * rightReal - leftImg * rightImg), (leftReal * rightImg + leftImg * rightReal))
    }
}
