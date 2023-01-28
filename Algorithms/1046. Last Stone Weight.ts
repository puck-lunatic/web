function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => a - b);
    // console.log(stones);
    while (stones.length > 1) {
        const y = stones.pop();
        const x = stones.pop();
        // console.log(y);
        // console.log(x);
        const diff = y - x;
        if (diff === 0) {
            continue;
        }
        stones.push(diff);
        stones.sort((a, b) => a - b);
    }
    return stones.length === 1 ? stones[0] : 0;
};
