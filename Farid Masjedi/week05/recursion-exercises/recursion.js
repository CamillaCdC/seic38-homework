// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// This function returns the largest number in a given array.
function findMax(arr, max=arr[0], index=1){
  if (index === arr.length) {return max;};
  if (arr[index] > max){
    max = arr[index];
  }
  index += 1;
  return findMax(arr, max, index);
}

// This function returns the factorial of a given number.
function factorial(n, memo){
  memo ||= {1:1};
  if (memo[n]) {return memo[n];};
  return memo[n] = n*factorial(n-1, memo);
}

// This function returns the Nth number in the fibonacci sequence.
// https://en.wikipedia.org/wiki/Fibonacci_number
// For this function, the first two fibonacci numbers are 1 and 1
function fibonacci(n, memory){
  memory ||= {1:1, 2:1};
  if (memory[n]) {return memory[n];};
  return memory[n] = fibonacci(n-1, memory)+fibonacci(n-2, memory);
}

// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
function coinFlips(n,index=1, result = ['T','H']){
  if (n===index) {return result};
  let res =[]
  for (i=0; i<result.length; i++){
    res.push(result[i]+'H');
    res.push(result[i]+'T');
  }
  result = res;
  index += 1;
  return coinFlips(n, index, result);
}

// This function returns an array of all combinations of the given letters
// Input type: Array of single characters
// For example, letterCombinations(["a","b","c"]) would return the following:
// ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

function letterCombinations(arr, result = [...arr], res = arr, index = 1){
  if (arr.length === index) {return result;};

  for (i of arr.valueOf()){
    for(j of res.valueOf()){
      if (!j.includes(i)){
        if (!j.includes(i) && !result.includes(j+i)){
          result.push(j+i);
        }
      }
    }
  }

  res = result;
  index += 1;
  return letterCombinations(arr, result, res, index)
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
