// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
};
console.log(`The largest number of two is ${maxOfTwoNumbers(2, 4)}`);
console.log(`The largest number of two is ${maxOfTwoNumbers(8, 2)}`);
console.log(`The largest number of two is ${maxOfTwoNumbers(6, 10)}`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c
  };
};
console.log(`The largest number of three is ${maxOfThree(2, 4, 6)}`);
console.log(`The largest number of three is ${maxOfThree(8, 4, 10)}`);
console.log(`The largest number of three is ${maxOfThree(90, 3, 50)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const findVowel = function (vowel) {
  if ( vowel.match(/[aeiou]/gi) ) {
    return true;
  } else {
    return false;
  };
};
console.log(findVowel('b'))
console.log(findVowel('a'))

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (sums) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return sums.reduce(reducer);
};
console.log(`Sum Array equals: ${sumArray([1,2,3,4])}`); //10
console.log(`Sum Array equals: ${sumArray([5,2,3,4])}`);

const multiplyArray = function (sums) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return sums.reduce(reducer);
};
console.log(`Multiply Array equals: ${multiplyArray([1,2,3,4])}`); //24
console.log(`Multiply Array equals: ${multiplyArray([5,2,3,4])}`);

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
  return str.split('').reverse().join('');
};
console.log(`Reverse String Excercice: ${reverseString("jag testar")}`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// ******** This isnt working. Come back later.  *******
const findLongestWord = function (str) {
  let strSplit = str.split(' '); // doesnt like this line.
  let longestWord = strSplit.sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
};
console.log(`Find Longest Word: ${findLongestWord(['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'])}`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (words) {
  words.filter(word => word.length > i)
}
