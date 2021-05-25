impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack = vec![];
        for tok in tokens {
            match tok.as_ref() {
                "+" => {
                    let right = stack.pop().unwrap();
                    let left = stack.pop().unwrap();
                    stack.push(left + right);
                }
                "-" => {
                    let right = stack.pop().unwrap();
                    let left = stack.pop().unwrap();
                    stack.push(left - right);
                }
                "*" => {
                    let right = stack.pop().unwrap();
                    let left = stack.pop().unwrap();
                    stack.push(left * right);
                }
                "/" => {
                    let right = stack.pop().unwrap();
                    let left = stack.pop().unwrap();
                    stack.push(left / right);
                }
                _ => {
                    stack.push(tok.parse::<i32>().unwrap());
                }
            }
        }
        stack[0]
    }
}
