// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

// const findMax = function(arr) {
//   let index = 0;
//   let max = arr[0];
//
//   const rMax = function() {
//     // console.log(index, max)
//     if (index === arr.length) {
//       return max
//     };
//     if (arr[index] > max) {
//       max = arr[index]
//     };
//     index++
//     return rMax()
//   };
//   return rMax();
// };

const findMax = function(arr, largest = -Infinity) {
  //if the array is empty, return the largest value; we're done.
    if (arr.length === 0) {
      return largest
    } else {
      //Check if the first value is the largest so fibARR
      if (arr[0] > largest) {
        //Save the new largest
        largest = arr[0]
      }
      const rest = arr.slice(1);
      return findMax(rest, largest)

    }


  //Remove the first element and recurse
}

const factorial = function(n) {
  let index = 1;
  let output = 1;
  const rFactorial = function() {
    if (index > n) {
      return output;
    };
    output = output * index;
    index++;
    return rFactorial();
  };
  return rFactorial()
};




// This function returns the Nth number in the fibonacci sequence.
// https://en.wikipedia.org/wiki/Fibonacci_number
// For this function, the first two fibonacci numbers are 1 and 1
const fibonacci = function(n) {
 fibARR = [1, 1]
 i = 1
 endI = n - 1
 if (n === 1 || n === 2) {
   return 1
 }
 const rFib = function() {
   if (i === n) {
     return fibARR[endI]
   }
   fibARR.push(fibARR[i] + fibARR[i-1])
   i++;
   return rFib()
 }
 return rFib();
}

// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
const coinFlips = function(n, stem = '', arr =[]) {
  // console.log(stem)
  if (n === 0) {
    arr.push(stem)
    return arr
  } else {
    coinFlips(n-1, stem + 'H' , arr)
    coinFlips(n-1, stem + 'T', arr)
    return arr
  }
}

// This function returns an array of all combinations of the given letters
// Input type: Array of single characters
// For example, letterCombinations(["a","b","c"]) would return the following:
// ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
const letterCombinations = function(arr, n = arr.length, stem = '', out = []) {
  console.log( n )
    out.push(stem)
  if (n === 0) {
    return out
  } else {
    console.log(out)
    letterCombinations(arr, n-1, stem + arr[0], out)
    letterCombinations(arr, n-1, stem + arr[1], out)
    letterCombinations(arr, n-1, stem + arr[2], out)
    return out
  }
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
