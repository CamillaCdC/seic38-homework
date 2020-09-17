// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers =function (a, b) {
  if (a > b){
    return a;
  }
    return b;
}

console.log(`${maxOfTwoNumbers(4,56)}`);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
    let larger = a >b ? a:b;
    let max = larger >c? larger : c;

      return max;
}

console.log(maxOfThree(2,15,7));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel =function (str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i]==="a") {
        return 'true';

      }else if (str[i]==='e'){
        return 'true';

      }else if (str[i]==='i'){
        return 'true';

      }else if (str[i]==='o'){
        return 'true';

      }else if (str[i]==='u'){
        return 'true';
      }
      return 'false';
      }

    }

console.log(`${isVowel('gooday')}`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
const sumArray = function (array){
  let sum = array[0];
  for (var i = 1; i < array.length; i++) {
    if(i !== array.length){
    sum += array[i];
    }
  }
  return sum;
}
const multiplyArray = function (array){
  let max= array[0];
  for (var i = 1; i < array.length; i++) {
    if( i !==array.length)
    max *=array[i];
  }
  return max;

}

console.log(`${sumArray([2,3,5,7,8])}`);
console.log(`${multiplyArray([2,3,5,7,8])}`);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
      let newStr = "";
      for (var i = str.length-1; i >=0; i--) {
        newStr +=str[i];
      }
  return newStr;
}

console.log(`${reverseString('it is good')}`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const  findLongestWord = function (array) {
      let longWordLength = array[0].length;
      let longWord = array[0];
      for (var i = 1; i < array.length; i++) {
      if (longWordLength < array[i].length){
        longWordLength = array[i].length;
        longWord = array[i];
      }
    }
      return longWord;

    }
const arr = ['hello','mate','gooday','bye'];
console.log(`${findLongestWord(arr)}`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (str, number) {
    if(str.length > number){
      return str;
    }
}
console.log(`${filterLongWords("gooday", 5)}`);
