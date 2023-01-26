function twoSum(nums: number[], target: number): number[] {
    // Use Map
    if (nums.length === 2) {
        return [0, 1];
    }
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        const diff: number = target - nums[i];
        map.set(diff, i);
    }

    // Unreachable
    return [];
};
