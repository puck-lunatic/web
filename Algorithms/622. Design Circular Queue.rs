struct MyCircularQueue {
    items: Vec<Option<i32>>,
    head: i32,
    tail: i32,
    capacity: i32,
    size: i32,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyCircularQueue {

    fn new(k: i32) -> Self {
        MyCircularQueue {
            items: vec![None; k as usize],
            head: 0,
            tail: 0,
            capacity: k,
            size: 0,
        }
    }
    
    fn en_queue(&mut self, value: i32) -> bool {
        if self.is_full() { return false; }

        self.items[self.tail as usize] = Some(value);
        self.tail = (self.tail + 1) % self.capacity;
        self.size += 1;

        true
    }
    
    fn de_queue(&mut self) -> bool {
        if self.is_empty() { return false; }

        self.items[self.head as usize] = None;
        self.head = (self.head + 1) % self.capacity;
        self.size -= 1;

        true
    }
    
    fn front(&self) -> i32 {
        self.items[self.head as usize].unwrap_or(-1)
    }
    
    fn rear(&self) -> i32 {
        let tmp_tail = if self.tail == 0 { self.capacity - 1 } else { self.tail - 1 };
        self.items[tmp_tail as usize].unwrap_or(-1)
    }
    
    fn is_empty(&self) -> bool {
        self.size == 0
    }
    
    fn is_full(&self) -> bool {
        self.size == self.capacity
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = MyCircularQueue::new(k);
 * let ret_1: bool = obj.en_queue(value);
 * let ret_2: bool = obj.de_queue();
 * let ret_3: i32 = obj.front();
 * let ret_4: i32 = obj.rear();
 * let ret_5: bool = obj.is_empty();
 * let ret_6: bool = obj.is_full();
 */
