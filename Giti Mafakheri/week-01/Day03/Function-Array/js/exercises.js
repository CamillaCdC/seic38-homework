// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
//You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1,num2){
  let largest ;
  if (num1>num2) {
    largest = num1;
  } else {
    largest = num2;
  }
  return `the largest number is ${largest}`;
}
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree =function(num1,num2,num3){
  let largest ;
  if (num1>num2) {
    if (num1>num3) {
      largest = num1;
    } else {
      largest = num3;
    }

  } else {
    if (num2>num3) {
      largest = num2;
    } else {
      largest = num3;
    }

  }
  return `the largest number is ${largest}`;
}
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all
// the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10,
// and `multiplyArray([1,2,3,4])` should return 24.
//
const sumArray = function(){
  var array = [1,2,3,4,5];
  let sum=0 ;
  for (var i = 0; i < array.length; i++) {
sum  =sum + array[i];
  }
return sum;
}





const multiplyArray = function(){
  var array = [1,2,3,4,5];
  let mul = 1 ;
  for (var i = 0; i < array.length; i++) {
mul  =mul * array[i];
  }
return mul;
}

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function () {
  var array = ["a","b"];
  var first = array.pop();
  var second = array.pop();
  console.log(first,second);
}




// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
