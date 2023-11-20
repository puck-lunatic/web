function garbageCollection(garbage: string[], travel: number[]): number {
  const cal = (x: string) => {
    let result = 0;
    let st = 0;
    for (let i = 0; i < garbage.length; i++) {
      let cnt = 0;
      for (const c of garbage[i]) {
        if (c === x) {
          cnt += 1;
        }
      }
      if (cnt > 0) {
        result += cnt + st;
        st = 0;
      }
      if (i < travel.length) {
        st += travel[i];
      }
    }
    return result;
  };
  return cal("M") + cal("P") + cal("G");
}
