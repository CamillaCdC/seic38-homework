// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
  let index = 0;
  let max = arr[0];
  function high(){
    if(index === arr.length){
      return max;
    }
    if (arr[index] > max) {
      max = arr[index]
      index++;
      return high()
    } else {
      index++;
      return high()
    }
  }
  return high();
}

function factorial(num) {
  if(num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

function fibonacci(num){
  if (num < 2) {
    return num;
  } else {
    return (fibonacci(num-1) + fibonacci(num-2));
  }
}

function coinFlips(n) {
  function flip(n, result, current) {
    if (n === 1) {
      result.push('H');
      result.push('T');
    } else {
      flip(n-1, result, current + 'H');
      flip(n-1, result, current + 'T');
    }
  }
  let result = []

  flip(n, result, '')
  return result;
}




//           H      or        T          n === 1
//     then add and H and a T to both sides
//  H  H or H  T       T  H or  T  T      n === 2
//             same again on all 4
// HHH|HHT HTH|HTT   THH|THT   TTH|TTT   n === 3










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
