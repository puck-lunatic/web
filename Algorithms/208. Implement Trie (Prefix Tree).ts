class Trie {
  constructor() {
    this.children = {};
  }
  private children: Object;

  insert(word: string): void {
    let node: Object = this.children;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node["isEnd"] = true;
  }

  search(word: string): boolean {
    let node: Object = this.searchPrefix(word);
    return node !== undefined && node["isEnd"] !== undefined;
  }

  searchPrefix(prefix: string): Object {
    let node: Object = this.children;
    for (let char of prefix) {
      if (!node[char]) {
        return false;
      }
      node = node[char];
    }
    return node;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== false;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
