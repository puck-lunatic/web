function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let result = 0;
  while (people.length > 0) {
    const length = people.length;
    result++;
    if (length === 1) {
      people.pop();
    } else {
      if (people[length - 1] + people[0] <= limit) {
        people.pop();
        people.shift();
      } else {
        people.pop();
      }
    }
  }
  return result;
}
