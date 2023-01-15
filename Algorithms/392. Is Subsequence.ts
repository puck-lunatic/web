function isSubsequence(s: string, t: string): boolean {
    const sLen = s.length;
    const tLen = t.length;
    if (sLen === 0) {
        return true;
    }
    let indicator = 0;
    for(let i = 0; i < sLen; i++) {
        let flag = false;
        while (indicator < tLen) {
            if (s.charAt(i) === t.charAt(indicator)) {
                indicator += 1;
                flag = true;
                break;
            }
            indicator += 1;
        }
        if (!flag) {
            return false;
        }
    }
    return true;
};
