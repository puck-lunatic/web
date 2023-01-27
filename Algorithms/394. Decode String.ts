function decodeString(s: string): string {
    const stack: string[] = [];
    let buffer: string = '';
    let counter: number = 0;
    const decode = (s: string): string => {
        let number: string = '';
        let word: string = '';
        for (let i = 0; i < s.length; i++) {
            if (/[0-9]/.test(s.charAt(i))) {
                number = `${number}${s.charAt(i)}`;
                continue;
            }
            if (/[a-z]/.test(s.charAt(i))) {
                word = `${word}${s.charAt(i)}`;
                continue;
            }
        }
        return (new Array(Number(number)).fill(word)).join('');
    }
    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s.charAt(i))) {
            if (buffer === '') {
                stack.push(s.charAt(i));
            } else {
                buffer = `${buffer}${s.charAt(i)}`;
            }
            continue;
        }

        if (/[0-9]/.test(s.charAt(i))) {
            if (buffer !== '' && !/^[0-9]+$/.test(buffer)) {
                stack.push(buffer);
                buffer = '';
                counter += 1;
            }
            buffer = `${buffer}${s.charAt(i)}`;
            continue;
        }

        if (s.charAt(i) === '[') {
            buffer = `${buffer}${s.charAt(i)}`;
            continue;
        }

        if (s.charAt(i) === ']') {
            const temp: string = decode(buffer);
            if (counter > 0) {
                buffer = `${stack.pop()}${temp}`;
                counter--;
            } else {
                stack.push(temp);
                buffer = '';
            }
        }
    }

    return stack.join('');
};
