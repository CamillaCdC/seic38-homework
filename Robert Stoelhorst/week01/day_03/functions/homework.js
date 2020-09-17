// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
  console.log(`The greater number of ${ num1 } and ${ num2 } is ${ num1 }`);
} else if (num2 > num1) {
  console.log(`The greater number of ${ num1 } and ${ num2 } is ${ num2 }`)
} else {
  console.warn(`there seems to be a problem! It looks like both ${ num1 } and ${ num2 } are the same`)
 }
}
maxOfTwoNumbers(10, 8);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num3) {
  console.log(`The greater number out of ${ num1 }, ${ num2 } and ${ num3 } is ${ num1 }`);
} else if (num2 > num1 && num3) {
  console.log(`The greater number out of ${ num1 }, ${ num2 } and ${ num3 } is ${ num2 }`);
} else if (num3 > num1 && num2) {
  console.log(`The greater number out of ${ num1 }, ${ num2 } and ${ num3 } is ${ num3 }`);
} else {
  console.warn(`there seems to be a problem! It looks like all ${ num1 }, ${ num2 } and ${ num3 } are the same`)
 }
}
maxOfThree(10, 12, 1);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const checkVowel = function (choice) {
const vowels = ["a", "e", "i", "o", "u"];
const n = vowels.includes("o", 0);
};
checkVowel("j");
//
// const findVowel = function (letters) {
//   const vowels = ["a", "e", "i", "o", "u"]
//   if
//   console.log("true");
// } else {
// console.log("false");
// }
// };
// findVowel(a);


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const addition = function () {
const sumArray = [1, 2, 3, 4];
sumArray.push(9);
    // Getting sum of numbers
    const sum = sumArray.reduce(function(a, b){
        return a + b;
    }, 0);

    console.log(sum);
}
addition();


const multiplication = function () {
const multiplyArray = [1, 2, 3, 4];
multiplyArray.push(5);
    // Getting sum of numbers
    const multiply = multiplyArray.reduce(function(a, b){
        return a * b; //changing the operator in the voue of 0 below to "1" will perform multiplication
    }, 1);

    console.log(multiply);
}
multiplication();

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(str) {
    const splitString = str.split(""); // var splitString
    const reverseArray = splitString.reverse(); // var reverseArray
    const joinArray = reverseArray.join(""); // var joinArray
console.log(joinArray);
};
reverseString("surivanoroc etanimile");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


// const trueOrFalse = function ("e") { //a function that says your glass is half full or half empty
// for (let i = 0; i <= 20; i++)
// if (i < 50) {
// console.log(`Your glass is %${ i } full therefore Half Empty!`);
// } else if (i >= 50 && i <= 100){
//   console.log(`Your glass is %${ i } full therefore Half Full!`);
// }
// }
// trueOrFalse(49)
