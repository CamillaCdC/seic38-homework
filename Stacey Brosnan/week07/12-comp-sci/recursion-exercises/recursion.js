// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
let index = 0;
let max = 0;


function findMax(array, index = 0, max = -Infinity){
  // This function returns the largest number in a given array.
   if ( index === array.length) {
     return max;
   }
    max = Math.max(max, array[index]);
    index = index + 1;
    return findMax(array, index, max);
}

function factorial(num, index = 1, result = 1){
  // This function returns the factorial of a given number.
  if (index === (num + 1)) {
      return result;
    }
      result = result * index;
      index = index + 1;
      return factorial(num, index, result);
}

factorial(5);

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.

  if (n === 1 || n === 2){
      return 1;
  }else {

      n = fibonacci(n - 1) + fibonacci(n - 2);
      console.log(n);
      return n;
      console.log(s);
    }
}


function coinFlips(tosses){

  const combinations = [];

  //Helper;
  const flip = function (soFar="") {
    if (soFar.length === tosses) {
      combinations.push ( soFar );
    } else {
      flip(soFar + "H");
      flip(soFar + "T");
    }
  }

  flip();
  return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
