function longestPalindrome(s: string): number {
    if (s.length < 2) {
        return 1;
    }
    const charSet: Set<string> = new Set();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const char: string = s.charAt(i);
        if (charSet.has(char)) {
            result += 2;
            charSet.delete(char)
        } else {
            charSet.add(char);
        }
    }

    return result + (charSet.size > 0 ? 1 : 0);
};
