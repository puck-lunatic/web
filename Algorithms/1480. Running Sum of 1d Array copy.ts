function runningSum(nums: number[]): number[] {
    return nums.map((_, i) => nums.slice(0, i + 1).reduce((a, c) => a + c, 0));
};
