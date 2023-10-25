function kthGrammar(n: number, k: number): number {
  // let str = '0';
  // for (let i = 2; i <= n; i++) {
  //     str = str.split('').map(e => e === '0' ? '01' : '10').join('');
  // }
  // return str.charAt(k - 1) === '0' ? 0 : 1;
  if (n === 1) {
    return 0;
  }
  if (k <= 1 << (n - 2)) {
    return kthGrammar(n - 1, k);
  }
  return kthGrammar(n - 1, k - (1 << (n - 2))) ^ 1;
}
