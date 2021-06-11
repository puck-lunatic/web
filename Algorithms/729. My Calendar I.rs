use std::collections::BTreeMap;

type Interval = (i32, i32);
type Center = i32;

#[derive(Default)]
struct MyCalendar {
    btm: BTreeMap<Center, Interval>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyCalendar {

    fn new() -> Self {
        let btm: BTreeMap<Center, Interval> = BTreeMap::new();
        MyCalendar { btm }
    }

    fn book(&mut self, start: i32, end: i32) -> bool {
        let center = start + end;
        if let Some((_, &(_, last_end))) = self.btm.range(..=center).next_back() {
            if start < last_end {
                return false;
            }
        }
        if let Some((_, &(first_start, _))) = self.btm.range(center..).next() {
            if first_start < end {
                return false;
            }
        }
        self.btm.insert(center, (start, end));
        true
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * let obj = MyCalendar::new();
 * let ret_1: bool = obj.book(start, end);
 */
