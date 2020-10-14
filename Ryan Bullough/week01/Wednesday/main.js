const maxOfTwoNumbers = (a, b) => {
  return a > b ? a : b;
};
const maxOfNumbers = (...numbers) => {
  const result = numbers.sort(function (a, b) {
    return a - b;
  });
  return result.pop();
};
const isVowel = (character) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(character);
};
const sumArray = (array) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
};
const multiplyArray = (array) => {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return array.reduce(reducer);
};
const reverseString = (string) => {
  return string.split("").reverse().join("");
};
const findLongestWord = ([...array]) => {
  const result = array.sort(function (a, b) {
    return a.length - b.length;
  });
  return result.pop();
};
const filterLongWords = ([...array], largerThan) => {
  const result = array.filter((word) => word.length > largerThan);
  return result;
};
// Word Guesser
const targetWord = ["r", "y", "y", "n"];
const guessedWords = targetWord.map((letter) => (letter = "_"));
let prizeMoney = 0;
const guessLetter = (char) => {
  char = char.toLowerCase();
  if (!targetWord.includes(char)) {
    console.log("That's not in there!");
    prizeMoney -= Math.random() * 1000;
  } else {
    console.log("Lucky guess!");
    prizeMoney += Math.random() * 1000;
    let index = targetWord.indexOf(char);
    while (index != -1) {
      guessedWords[index] = char;
      index = targetWord.indexOf(char, index + 1);
    }
    console.log(guessedWords.join(""));
    if (!guessedWords.includes("_")) {
      console.log(
        `That's it, you won the game! See Adriana for your prize money of $${prizeMoney.toFixed(
          2
        )}`
      );
    }
  }
};
