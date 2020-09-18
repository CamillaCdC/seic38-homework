// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2){
      if (num1 > num2){
        return num1;
      } else {
        return num2;
      }
    };
console.log(`The largest of 7 and 5 is ${maxOfTwoNumbers(7, 5)}`);
console.log(`The largest of 1 and 10 is ${maxOfTwoNumbers(1, 10)}`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

  const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3){
    return num1;
  } else if (num2 > num1 && num2 > num3){
    return num2;
  } else {
    return num3;
  }
};


console.log(`The largest of 7, 5 and 1 is ${maxOfTwoNumbers(7, 5, 1)}`);
console.log(`The largest of 1, 10 and 4 is ${maxOfTwoNumbers(1, 10, 4)}`);
console.log(`The largest of 2, 7 and 10 is ${maxOfTwoNumbers(1, 7, 10)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

  const character = function (string) {
    if (string.length === 1){
      if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u" ) {
        return true;
      } else {
        return false;
      }
      } else {
        return false;
      }
  };

console.log(`${character("a")}`);
console.log(`${character("bath")}`);
console.log(`${character("c")}`);
console.log(`${character("i")}`);
console.log(`${character("u")}`);


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

let numberArray = [2, 3, 4, 5];

let sum = 0;

  const sumArray = function (numberArray) {
    for (let i = 0; i < numberArray.length; i++){
    sum = sum + numberArray[i];
  }
  return sum;
};

 let multiply = 1;

  const multiplyArray = function (numberArray) {
    for (let i = 0; numberArray.length > i; i++){
    multiply = multiply * numberArray[i];
  }
  return multiply;
};

console.log(`${sumArray(numberArray)}`);
console.log(`${multiplyArray(numberArray)}`);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

  const reverseString = function (string) {
    newString = string.split("").reverse().join("");
    return newString;
};

console.log(`${reverseString("Hello")}`);
console.log(`${reverseString("Amazing")}`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (string) {
  let stringSplit = string.split(' ');
  let longestWord = 0;
  for (let i = 0; i < stringSplit.length; i++){
    if (stringSplit[i].length > longestWord){
    longestWord = stringSplit[i].length;
    }
  }
  return longestWord
};

console.log(`The length of the longest word is ${findLongestWord("This is a funny function")}`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const wordArray = ["Hello", "otherwise", "be"];

let longer = "";

  const filterLongWords = function (num, wordArray){
    for (let i = 0; i < wordArray.length; i++){
    if (num < wordArray[i].length){
    longer = longer + wordArray[i] + " ";
  }
  }
  return longer;
};

console.log(`${filterLongWords(2, wordArray)}`);
