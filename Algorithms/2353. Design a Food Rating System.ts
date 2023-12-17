class FoodRatings {
  private foods: string[];
  private cuisines: string[];
  private ratings: number[];
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const index = this.foods.indexOf(food);
    this.ratings[index] = newRating;
  }

  highestRated(cuisine: string): string {
    let highest = 0;
    let highestIndex = 0;
    for (let i = 0; i < this.cuisines.length; i++) {
      if (this.cuisines[i] === cuisine) {
        if (this.ratings[i] > highest) {
          highest = this.ratings[i];
          highestIndex = i;
        } else if (this.ratings[i] === highest) {
          if (this.foods[highestIndex] > this.foods[i]) {
            highestIndex = i;
          }
        }
      }
    }
    return this.foods[highestIndex];
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
