export const isPangram = (sentence) => {
  let charCount = Array.from({length: 26}, () => 0); // Its index will help represent the char (0 => a)
  const sentenceLower = sentence.toLowerCase();
  for (let char of sentenceLower) {
    charCount[char.charCodeAt() - "a".charCodeAt()]++;
  }

  return !charCount.filter(count => count === 0).length;
};
