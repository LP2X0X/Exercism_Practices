const ROMAN_MAP_ONE = ["I", "X", "C", "M"];

const ROMAN_MAP_FIVE = ["V", "L", "D"];

function map(value, one, biggerOne, five) {
  switch (value) {
    case "0":
      return "";

      
    case "1":
      return one;


    case "2":
      return one + one;


    case "3":
      return one + one + one;


    case "4":
      return one + five;


    case "5":
      return five;


    case "6":
      return five + one;


    case "7":
      return five + one + one;


    case "8":
      return five + one + one + one;


    case "9":
      return one + biggerOne;

  }
}

export const toRoman = (numbers) => {
  let index = 0;
  let roman = "";

  numbers
    .toString()
    .split("")
    .reverse()
    .forEach((num) => {
      roman =
        map(
          num,
          ROMAN_MAP_ONE[index],
          ROMAN_MAP_ONE[index + 1],
          ROMAN_MAP_FIVE[index]
        ) + roman;
      index++;
    });

  return roman;
};
