const BRACKETS = {
	")": "(",
	"}": "{",
	"]": "[",
};

export const isPaired = (sentence) => {
	let seenBrackets = [];
    let openBrackets = Object.values(BRACKETS);

	for (let char of sentence) {
      if (openBrackets.includes(char))
      {
        seenBrackets.push(char);
      }
	  else if (char in BRACKETS && BRACKETS[char] !== seenBrackets.pop())
      {
        return false;
      }
	}

  if (seenBrackets.length) {
    return false;
  }
  
	return true;
};
