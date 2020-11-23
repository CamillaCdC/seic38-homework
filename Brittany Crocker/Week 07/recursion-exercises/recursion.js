// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax (arr, largest=arr[0]) {
  if (arr.length === 0) {
    return largest;
  }
  if (arr[0] > largest) {
    largest = arr[0]
  }
  const rest = arr.slice(1)
  return findMax(rest, largest)
}


function factorial(n){
  return (n <= 1) ? 1: n * factorial(n-1);
}

function fibonacci(n){

};


function coinFlips(tosses){
  const combinations = [];

  const flip = function (soFar="") {
    if (soFar.length === tosses) {
      combinations.push(soFar)
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


function letterCombinations(arr, result, currentLetter){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
   //  if (currentLetter == undefined) {
   //    result = arr
   //    console.log('here')
   //  }
   //  currentLetter = ''
   //  let index = 0
   //  if (result.length === (arr.length * arr.length)) {
   //    return 'finished'
   //  } else {
   //    currentLetter = arr.shift()
   //    result.push(currentLetter.concat(arr[index]))
   //    index ++
   //    letterCombinations(arr, result, currentLetter)
   //  };
   // console.log(result)

}
letterCombinations(['a', 'b', 'c', 'd'])
module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
