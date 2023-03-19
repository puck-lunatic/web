class WordDictionary {
  constructor() {
    this.words = [];
  }

  private words: string[];

  addWord(word: string): void {
    if (!this.words.includes(word)) {
      this.words.push(word);
    }
  }

  search(word: string): boolean {
    const stack = [];
    const chars = [];
    word.split("").forEach((c) => {
      if (c !== ".") {
        if (stack.length !== 0) {
          const length = stack.length;
          chars.push(`.{${length}}`);
          stack.splice(0);
        }
        chars.push(c);
      } else {
        stack.push(c);
      }
    });
    if (stack.length !== 0) {
      const length = stack.length;
      chars.push(`.{${length}}`);
    }
    chars.unshift("^");
    chars.push("$");
    const regex = new RegExp(chars.join(""));
    return this.words.some((e) => regex.test(e));
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
