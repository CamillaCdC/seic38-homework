// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    if (arr.length === 1){
      console.log(arr[0]) //really do't understand why console.log works fine but the function return 'undefined'
      return arr[0]
    } else if (arr[0] <= arr[arr.length - 1]){
      arr.shift()
    } else {
      arr.pop()
    };
    findMax(arr)
};

function factorial(n){
    let f
    if (n >= 1){
      f = n * factorial(n-1)
    } else {
      f = 1
    }
    return f
}

function fibonacci(n){
    let f
    if (n > 1){
      f = fibonacci(n-1) + fibonacci(n-2)
    } else {
      f = n
    }
    return f
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
    console.log(array)//really do't understand why console.log works fine but the function return 'undefined'
    return array;
  }
  coinFlips(n-1, array)
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
