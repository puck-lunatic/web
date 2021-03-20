use std::collections::HashMap;

#[derive(Default)]
struct UndergroundSystem {
    time: HashMap<String, HashMap<String, (i32, i32)>>,
    customer: HashMap<i32, (String, i32)>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl UndergroundSystem {

    fn new() -> Self {
        UndergroundSystem::default()
    }
    
    fn check_in(&mut self, id: i32, station_name: String, t: i32) {
        self.customer.insert(id, (station_name, t));
    }
    
    fn check_out(&mut self, id: i32, station_name: String, t: i32) {
        let (start_station, start_t) = self.customer.remove(&id).expect("in");
        let (sum, count) = self
            .time
            .entry(start_station)
            .or_default()
            .entry(station_name)
            .or_default();
        *sum += t - start_t;
        *count += 1;
    }
    
    fn get_average_time(&mut self, start_station: String, end_station: String) -> f64 {
        let (sum, count) = self
            .time
            .entry(start_station)
            .or_default()
            .entry(end_station)
            .or_default();
        *sum as f64 / *count as f64
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * let obj = UndergroundSystem::new();
 * obj.check_in(id, stationName, t);
 * obj.check_out(id, stationName, t);
 * let ret_3: f64 = obj.get_average_time(startStation, endStation);
 */
 