function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
  let res: number[] = [];
  let mem = {};
  let max = { obs: 0, course: 0 };
  for (let i = 0; i < obstacles.length; i++) {
    let curObs = obstacles[i];
    if (curObs >= max.obs) {
      max.obs = curObs;
      max.course += 1;
      res[i] = max.course;
    } else {
      res[i] = 1;
      let sortedCourse = Object.keys(mem);
      for (let j = sortedCourse.length - 1; j >= 0; j--) {
        let k = sortedCourse[j];
        let minObs = mem[k];
        if (minObs <= curObs) {
          res[i] = Math.max(Number(k) + 1, res[i]);
          break;
        }
      }
    }
    if (mem[res[i]] === undefined) {
      mem[res[i]] = curObs;
    } else {
      mem[res[i]] = Math.min(curObs, mem[res[i]]);
    }
    max.course = Math.max(max.course, res[i]);
  }
  return res;
}
