function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) {
        return [];
    }

    // Brute Force will cause "Time Limit Exceeded"
    // const sortedWord: string = p.split('').sort().join('');
    // for (let i = 0; i <= (s.length - p.length); i++) {
    //     if ((s.slice(i, i + sliceLength).split('').sort().join('') === sortedWord)) {
    //         result.push(i);
    //     }
    // }


    const result: number[] = [];
    const length: number = p.length;
    const map: Map<string, number> = new Map();
    for (let i = 0; i < length; i++) {
        if (map.has(p[i])) {
            map.set(p[i], map.get(p[i]) + 1);
        } else {
            map.set(p[i], 1);
        }
    }
    let counter: number = map.size;
    for (let left = 0, right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) === 0) {
                --counter;
            }
        }

        while (counter === 0) {
            if (right - left + 1 === length) {
                result.push(left);
            }
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) {
                    ++counter;
                }
            }
            ++left;
        }
    }
    return result;
};
