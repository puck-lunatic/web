function backspaceCompare(s: string, t: string): boolean {
    const sStack: string[] = [];
    const tStack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '#') {
            sStack.pop();
            continue;
        }
        sStack.push(s.charAt(i));
    }
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) === '#') {
            tStack.pop();
            continue;
        }
        tStack.push(t.charAt(i));
    }
    return sStack.join('') === tStack.join('');
};
