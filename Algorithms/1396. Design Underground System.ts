interface Trip {
  stationName: string;
  t: number;
}

interface AvgData {
  sum: number;
  count: number;
}

class UndergroundSystem {
  constructor() {
    this.customer = new Map();
    this.avarage = new Map();
  }

  private customer: Map<number, Trip>;
  private avarage: Map<string, AvgData>;

  checkIn(id: number, stationName: string, t: number): void {
    this.customer.set(id, { stationName, t });
  }

  checkOut(id: number, stationName: string, t: number): void {
    const checkIn = this.customer.get(id)!;
    const key = `${checkIn.stationName}-${stationName}`;
    const { sum, count } = this.avarage.get(key) ?? { sum: 0, count: 0 };
    this.avarage.set(key, { sum: sum + (t - checkIn.t), count: count + 1 });
  }

  getAverageTime(startStation: string, endStation: string): number {
    const { sum, count } = this.avarage.get(
      `${startStation}-${endStation}`
    ) ?? { sum: 0, count: 0 };
    return count !== 0 ? sum / count : 0;
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
