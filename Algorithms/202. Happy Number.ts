function isHappy(n: number): boolean {
    const calculate = (num: number): number => {
        let res: number = 0;
        let current: number = num;
        while (current > 0) {
            const digital = current % 10;
            current = Math.floor(current / 10);
            res += digital * digital;
        }
        return res;
    }
    const set: Set<number> = new Set();
    let current: number = n;
    while (current !== 1 && !set.has(current)) {
        set.add(current);
        current = calculate(current);
    }
    return current === 1;
};
