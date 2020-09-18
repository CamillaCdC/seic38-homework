// Array and Functions Bonus Material
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


//// QUESTION: 1
const maxOfTwoNumbers = function(num1,num2) {
  if (num1 > num2)
  greater = num1;
  else (num1 < num2)
  greater = num2; {
    console.log(greater);
  }
};

console.log(maxOfTwoNumbers(10,50))


/// QUESTION: 2
const maxOfThree = function(number1,number2,number3) {
  return Math.max(number1,number2,number3)
};

console.log(maxOfThree(11,12,13))



/// // QUESTION: 3
const toFindVowel = function(string) {
  var i = string[0]
  if ((i === "a") || (i === "e") || (i === "i") || (i === "o") || (i === "u")) {
    console.log('This word is a vowel');
  } else {
    console.log('This word is not a vowel');
  }
};
console.log(toFindVowel('zdnee'))




// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


// QUESTION: Bonus 1.
const reversal = function (word) {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join(""); {
    return joinArray;
  }

};
console.log(reversal('efndwiesmdc'))
console.log(reversal('1234567'))
console.log(reversal('02391283'))



// QUESTION: Bonus 2
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

const filterLongWords = function() {


};

//// QUESTION: Bonus 3
const findLongestWord = function (words) {
  var strSplit = words.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = (strSplit[i]);
     }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
