const checkUpper = (sentence) => sentence === sentence.toUpperCase();
const checkEmpty = (sentence) => !sentence.trim();
const checkQuestion = (sentence) => sentence.trim().at(-1) === "?";
const checkNoChar = (sentence) => !sentence.split('').some(c => c.charCodeAt() >= 65 && c.charCodeAt() <= 90);

export const hey = (message) => {
  if (checkEmpty(message)) {
    return "Fine. Be that way!";
  } else if (checkQuestion(message) && checkUpper(message) && !checkNoChar(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (checkQuestion(message)) {
    return "Sure.";
  } else if (checkNoChar(message)) {
    return "Whatever.";
  } else if (checkUpper(message)) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};
