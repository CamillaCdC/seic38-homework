// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers= function(num1, num2) {
  if (num1 > num2) {
    return `${num1} is larger`;
  } else {
    return `${num2} is larger`;
  }

};

console.log(maxOfTwoNumbers(7, 4));
console.log(maxOfTwoNumbers(2, 3));
console.log(maxOfTwoNumbers(4, 4));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the largest.`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} is the largest.`;
  } else {
    return `${num3} is the largest.`;
  }
};

console.log(maxOfThree(1, 4, 5));
console.log(maxOfThree(7, 2, 6));
console.log(maxOfThree(1, 40, 7));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelQ = function(char) {
  if (char.length > 1) {
    console.log("Please enter a single character.");
    return false;
  } else if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { //is there a better way??
    return true;
  } else {
    return false;
  }
};

console.log(vowelQ("a"));
console.log(vowelQ("z"));
console.log(vowelQ("ldkfgajh"));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// const sumArray = function(array) {  //methodology here not suitable for user input --> user may insert malicious code
//   return eval(array.join('+'));
// };
//

//
// const multiplyArray = function(array) {  //methodology here not suitable for user input --> user may insert malicious code
//   return eval(array.join('*'));
// };
//

//NOTE: the commented out section was an original solution that worked, but was found googling, and is vulnerable to user inserted code. The working solution uses for loops, as I assume the intention was. 

const sumArray = function(array) {
  let output = array[0];
  for (let i = 1; i < array.length; i++) {
    output = output + array[i];
  }
  return output;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([2, 2, 10, 4]));
console.log(sumArray([184, 234, 332, 400]));

const multiplyArray = function(array) {
  let output = array[0];
  for (let i = 1; i < array.length; i++) {
    output = output * array[i];
  }
  return output;
}

console.log(multiplyArray([1, 2, 3, 4]));
console.log(multiplyArray([2, 2, 10, 4]));
console.log(multiplyArray([184, 234, 332, 400]));
//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string) {
  let output = "";
  for (let i = (string.length - 1); i >=0; i -- ){
  output = output + string[i];
  }
  return output;
};

console.log(reverseString("jag testar"));
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(array) {
  let longest = ""
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

console.log(findLongestWord(["apple", "banana", "durian", "mango", "pear"]));
console.log(findLongestWord(["my", "god", "I", "need", "beers"]));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

filterLongWords = function(array, i) {
  let output = []
  for (let k = 0; k < array.length; k++) {
    if (array[k].length > i) {
      output.push(array[k]);
    }
  }
  return output;
}

console.log(filterLongWords(["I", "understood", "some", "of", "those", "words"], 4));
