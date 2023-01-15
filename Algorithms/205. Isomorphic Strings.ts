function isIsomorphic(s: string, t: string): boolean {
    const letterMap: Map<String, String> = new Map();
    let result: boolean = true;
    [...s].forEach((char, index) => {
        if (!result) {
            return;
        }
        if (!letterMap.has(char)) {
            if (Array.from(letterMap.values()).includes(t.charAt(index))) {
                result = false;
                return;
            }
            letterMap.set(char, t.charAt(index));
            return;
        }
        if (letterMap.get(char) !== t.charAt(index)) {
            result = false;
        }
    });
    return result;
};
