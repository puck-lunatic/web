class ParkingSystem {
  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  private big: number;
  private medium: number;
  private small: number;

  addCar(carType: number): boolean {
    let result = false;
    switch (carType) {
      case 1:
        if (this.big > 0) {
          result = true;
          this.big -= 1;
        }
        break;
      case 2:
        if (this.medium > 0) {
          result = true;
          this.medium -= 1;
        }
        break;
      case 3:
        if (this.small > 0) {
          result = true;
          this.small -= 1;
        }
        break;

      default:
        break;
    }
    return result;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
