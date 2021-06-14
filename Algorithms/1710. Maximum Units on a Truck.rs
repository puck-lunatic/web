use std::cmp;

impl Solution {
    pub fn maximum_units(mut box_types: Vec<Vec<i32>>, truck_size: i32) -> i32 {
        box_types.sort_by(|x, y| x[1].cmp(&y[1]).reverse());
        let mut size = truck_size;
        let mut index = 0;
        let mut res = 0;
        while size!= 0 && index < box_types.len() {
            if size < box_types[index][0] {
                res += size*box_types[index][1];
                size = 0;
            } else {
                res += box_types[index][0]*box_types[index][1];
                size -= box_types[index][0];
                index += 1;
            }
        }
        res
    }
}
