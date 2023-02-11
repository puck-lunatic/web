function threeSumClosest(nums: number[], target: number): number {
    let result: number = nums[0] + nums[1] + nums[2];
    let nearest: number = Math.abs(target - result);
    nums.sort((a, b) => a - b);
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        let left: number = i + 1;
        let right: number = nums.length - 1;
        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];
            const diff: number = Math.abs(target - sum);
            if (diff < nearest) {
                nearest = diff;
                result = sum;
            }
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
