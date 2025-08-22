const OPERATORS = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiplied: (a, b) => a * b,
  divided: (a, b) => a / b,
};

export const answer = (text) => {

  let ops = [];
  text = text.slice(0, -1); // Remove the question mark

  let fragments = text.split(" ").filter(item => item !== "by").reverse(); // Filter out the word "by"

  // Avoid shifting
  const last = fragments.pop();
  const secondLast = fragments.pop();

  if (last !== "What" || secondLast !== "is") {
    throw new Error("Unknown operation");
  }

  fragments = fragments.reverse(); 

  for (let item of fragments) {
    let num = parseInt(item);
    let operator = OPERATORS[item];
    if (num) {
      ops.push(num);
    } else if (operator) {
      ops.push(operator);
    } else {
      throw new Error("Unknown operation");
    }
  }

  let result = ops[0];
  
  if (ops.length === 0) {
    throw new Error("Syntax error");
  } else if (ops.length === 1) {
    return result;
  }

  // Loop start at 1 since result is the first operand
  for (let i = 1; i < ops.length; i += 2){ 
    // If the SECOND item IS a number or the THIRD one IS NOT a number then THROW ERROR
    if (parseInt(ops[i]) || !parseInt(ops[i+1])) { 
      throw new Error("Syntax error");
    }
    result = ops[i](result, ops[i+1]);
  }

  return result;
}
