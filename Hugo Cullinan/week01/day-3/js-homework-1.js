// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  }else {
    return b;
  }
}
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  }else if (b > c && b > a) {
    return b;
  }else {
    return c;
  }
}
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (char) {
  const vowels = 'aeiou';
  if (char.length === 1) {
    if (vowels.includes(char)) {
      return true;
    }else {
      return false;
    }
  }else {
    return "Please give a one character string!"
  }
}
//4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const multiplyArray = function (array) {
  let multiply = array[0];
  for (let i = 1; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
}

const arr = [5,5,3,4];

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (words) {
  let longestWord = '';
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  return longestWord.length;
}
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function (words, i) {
  let filteredWords = [];
  for (let x = 0; x < words.length; x++) {
    if (words[x].length > i) {
      filteredWords.push(words[x]);
    }
  }
  return filteredWords;
}

rando = ['basketball','football','league','union','golf','tennis','hockey'];
