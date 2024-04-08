function countStudents(students: number[], sandwiches: number[]): number {
  while (students.length > 0) {
    const wish = students.shift();
    if (wish !== sandwiches[0]) {
      if (
        (wish === 1 && !students.includes(0)) ||
        (wish === 0 && !students.includes(1))
      ) {
        students.push(wish);
        break;
      } else {
        students.push(wish);
      }
    } else {
      sandwiches.shift();
    }
  }
  return students.length;
}
