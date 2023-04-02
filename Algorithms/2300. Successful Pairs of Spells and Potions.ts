function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  // Brute Force, Time Limit Exceeded
  // return spells
  //     .map(spell => potions
  //         .map(potion => potion * spell)
  //         .filter(strength => strength >= success)
  //         .length
  //     );

  potions.sort((a, b) => a - b);
  const length = potions.length;
  const result: number[] = [];
  for (const spell of spells) {
    let left = 0;
    let right = length;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (spell * potions[mid] >= success) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    result.push(length - left);
  }

  return result;
}
