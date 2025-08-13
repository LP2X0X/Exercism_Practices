pub fn reverse(input: &str) -> String {
    let input_len = input.chars().count(); // This helps accurately count even the grapheme characters.
    let mut temp_vec = vec!['_'; input_len];

    let mut _input_len = input_len;

    for c in input.chars() {
        _input_len -= 1;
        temp_vec[_input_len] = c;
    }

    let reverse_input = temp_vec.iter().collect();
    return reverse_input;
}
