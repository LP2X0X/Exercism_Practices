pub fn reverse(input: &str) -> String {
    let input_len = input.chars().count();
    let mut vec = vec!['_'; input_len];

    let mut _input_len = input_len;

    let mut x: String = String::new();

    for c in input.chars() {
        _input_len -= 1;
        vec[_input_len] = c;
    }

    x = vec.iter().collect();
    return x;
}