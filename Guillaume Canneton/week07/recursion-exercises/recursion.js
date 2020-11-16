// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    if (arr.length === 1){
      return arr[0]
    } else if (arr[0] <= arr[arr.length - 1]){
      arr.shift()
    } else {
      arr.pop()
    };
    return findMax(arr)
};

function factorial(n){
    if (n >= 1){
      return n * factorial(n-1)
    } else {
      return 1
    }
}

function fibonacci(n){
    if (n > 1){
      return fibonacci(n-1) + fibonacci(n-2)
    } else {
      return n
    }
}

function coinFlips(n, array = ['H', 'T']){
  if (n>1){
    let newArray =[];
    for (i=0; i<array.length;i++){
      newArray.push(array[i]+'H')
      newArray.push(array[i]+'T')
    }
    array = newArray
  } else {
    return array;
  }
  return coinFlips(n-1, array)
};

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
