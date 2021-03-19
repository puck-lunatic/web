use std::collections::HashSet;

impl Solution {
    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut visited_rooms: HashSet<i32> = HashSet::new();
        visited_rooms.insert(0);
        
        Solution::dfs(&mut visited_rooms, &rooms[0], &rooms);
        
        // println!("{}, {}", visited_rooms.len(), rooms.len());
        visited_rooms.len() == rooms.len()
    }
    
    fn dfs(visited_rooms: &mut HashSet<i32>, current_room: &Vec<i32>, rooms: &Vec<Vec<i32>>) {
        if current_room.len() != 0 {
            for i in 0..current_room.len() {
                if !visited_rooms.contains(&current_room[i]) {
                    visited_rooms.insert(current_room[i]);
                    Solution::dfs(visited_rooms, &rooms[current_room[i] as usize], rooms);
                }
            }
        }
    }
}
