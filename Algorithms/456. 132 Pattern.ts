function find132pattern(nums: number[]): boolean {
    let vk = -Infinity;
    const stack: number[] = [];
    const n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < vk) {
            return true;
        }
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            vk = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};
