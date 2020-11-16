// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(numArray){
    // This function returns the largest number in a given array.
    // copy the given array
    let nums = numArray.slice();

    // base case: if we're at the last number, return it
    if (nums.length == 1) {
       return nums[0];
      }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) {
      nums.splice(0,1);
     }
    else {
      nums.splice(1,1);
     }

    // with one less number in the array, call the same function
    return findMax(nums);
}

function factorial(x){
    // This function returns the factorial of a given number.
    if (x === 0) {
      return 1;
   }
    return x * factorial(x-1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
      if(n < 2) {
        return n;
      }
      else {
        return fibonacci(n-1) + fibonacci(n - 2);
      }
  }


function coinFlips(tosses){
    const combinations = [];

    // Helper function:
    const flip = function (soFar="") {
      if(soFar.length === tosses) {
        combinations.push( soFar );
      } else {
          flip(soFar + "H")
          flip(soFar + "T")
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
