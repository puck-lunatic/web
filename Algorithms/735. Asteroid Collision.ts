function asteroidCollision(asteroids: number[]): number[] {
  const result: number[] = [];
  for (let asteroid of asteroids) {
    if (asteroid > 0 || result.length === 0 || result[result.length - 1] < 0) {
      result.push(asteroid);
    } else {
      let i: number = result.length - 1;
      while (i >= 0) {
        if (result[i] < 0) {
          result.push(asteroid);
          break;
        } else {
          const last: number = result.pop();
          if (last > Math.abs(asteroid)) {
            result.push(last);
            break;
          } else if (last === Math.abs(asteroid)) {
            break;
          } else {
            if (i === 0) {
              result.push(asteroid);
            }
            i--;
          }
        }
      }
    }
  }

  return result;
}
