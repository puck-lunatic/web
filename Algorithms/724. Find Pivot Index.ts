function pivotIndex(nums: number[]): number {
    let res: number = 0;
    const len = nums.length;
    while (res < len) {
        const leftSum = nums.slice(0, res).reduce((a, c) => a + c, 0);
        const rightSum = nums.slice(res + 1, len).reduce((a, c) => a + c, 0);
        if (leftSum === rightSum) {
            return res;
        }
        res += 1;
    }
    return -1;
};
