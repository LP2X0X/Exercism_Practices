export const countWords = (sentence) => {
  // Clean stuff up
  let sentenceFragments = sentence.toLowerCase().replace(/[:!?,&@$%^.]/g, ' ').trim().split(/\s+/).map(word => {
    let temp = word;
    if (temp.startsWith("'"))
      temp = temp.slice(1);
    if (temp.endsWith("'"))
      temp = temp.slice(0,-1);
    return temp;
  });

  let obj = {};
  sentenceFragments.forEach(word => {
    obj[word] = (obj[word] || 0) + 1;
  });

  delete obj[""];
  
  return obj;
};

