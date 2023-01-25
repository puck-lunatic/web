function characterReplacement(s: string, k: number): number {
    const chars: string[] = s.split('');
    let result: number = 0;
    let left: number = 0;
    let max: number = 0;
    const map: Map<string, number> = new Map();
    for (let right = 0; right < chars.length; right++) {
        if (map.has(chars[right])) {
            map.set(chars[right], map.get(chars[right]) + 1);
        } else {
            map.set(chars[right], 1);
        }

        max = Math.max(max, map.get(chars[right]));

        while ((right - left + 1) - max > k) {
            map.set(chars[left], map.get(chars[left]) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};
