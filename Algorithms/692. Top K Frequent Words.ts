function topKFrequent(words: string[], k: number): string[] {
    const map = {};
    for (const word of words) {
        map[word] = (map[word] | 0) + 1;
    }
    const result = Array.from(Object.entries(map)).sort().sort((a, b) => (b[1] as number) - (a[1] as number)).slice(0, k).map(e => e[0]);
    // console.log(typeof result);
    // console.log(result);
    return result;
};
