// # Array and Functions Bonus Material
//





// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return console.log(`The greatest number is ${num1}`);
  } else {
    return console.log(`The greatest number is ${num2}`);
  }
}

maxOfTwoNumbers(1, 2)


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return console.log(`The greatest number is ${num1}`);
  } else if (num2 > num1 && num2 > num3) {
    return console.log(`The greatest number is ${num2}`);
  } else {
    return console.log(`The greatest number is ${num3}`)
  }
}

maxOfThreeNumbers(1, 2, 3)

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (char) {
  let response = console.log(`${char} is a vowel - True` );
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
    return response
  }
  else if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U" ) {
    return response
  }
   else {
    return console.log(`${char} is NOT a vowel - false`)
  }
}


isVowel("A")

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const array = [1, 2, 3, 4];

const sumArray = array.reduce(function (a, b) {
    return a + b;
  }, 0)
  console.log(sumArray)


const multiplyArray = array.reduce(function (a, b) {
  return a * b;
  }, 1);
console.log(multiplyArray)


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (string) {
console.log(`Before: ${string}`)
return console.log(`After: ${string.split('').reverse().join('')}`);

}

reverseString('jag testar')

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (words) {
  var longestWord = words.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
const answer = findLongestWord("Lapis Lupis Lortrem forenhei balwo");
console.log(`${answer}`)

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
