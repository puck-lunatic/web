function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  return candies.map((candy) => candy + extraCandies >= Math.max(...candies));
}
