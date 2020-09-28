// # Array and Functions Bonus Material
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
      console.log(`${a} is bigger then ${b}`);
      return a;
   } else {
    console.log(`${b} is bigger then ${a}`)
    return b;

  };
  }

maxOfTwoNumbers(3,9);




// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const getMax = function (d, e, f) {
  return Math.max(d, e, f);
};
console.log(getMax (9,2,130));
 //or




// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isitVowel = function (char) {
if (char === 'a' || 'e' || 'i' || 'o' || 'u') {
  return "true";
} else {
  return "false";}
}

console.log(isitVowel("g"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
function sumArray(numbers) {
	let total = 0;
	for (let i = 1; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

console.log(sumArray([1,2,3,4]));

function multiplyArray (numbers2) {
let total2 = 0;
for (let i = 1; i < numbers2.length; i++) {
  total2 += (total * numbers2[i]);
}
return total2;
}
console.log(multiplyArray(1,2,3,4))
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (will) {
  const splitString = will.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
  console.log(`${will}`);
}

console.log(reverseString("hello"));

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

//broken
// const findLongestWord = function (words) {
//   for (i = 0; i < findLongestWord.length; i++) {
//     if i + 1 i.length > i + 2 i.length {
//       return i + 1;
//     }
//   }
// }
// console.log(findLongestWord('orange', 'lemonsquash'))
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i

const words = ["ismycodeshit", "hen", "youdonthavetoanswerthatactually"];

let i = 5
let words = function(x , i){
  var longWords = words.filter(function(str) { return str.length > i; });
  if (longWords.length == 0) {
    console.log("You have no words longer than the number " + i + ".");
  }
};
