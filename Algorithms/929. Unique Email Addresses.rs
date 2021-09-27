use std::collections::HashSet;

impl Solution {
    pub fn num_unique_emails(emails: Vec<String>) -> i32 {
        let mut hs = HashSet::new();

        for email in &emails {
            let temp: Vec<&str> = email.split('@').collect::<Vec<_>>();
            let mut localName = temp[0].to_owned();
            if let Some(plus) = localName.find('+') {
                localName.replace_range(plus..localName.len(), "");
            };
            localName = localName.replace('.', "");
            hs.insert(localName + "@" + temp[1]);
        }
        hs.len() as i32
    }
}
