use time::{Duration, PrimitiveDateTime as DateTime};

pub fn after(start: DateTime) -> DateTime {
    match start.checked_add(Duration::new(1_000_000_000, 0)) {
        Some(result) => result,
        None => start,
    }
}