// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(testArray, index=0 ){
  let max=testArray[0];
  if (index === testArray.length) {
    return max;
  }
  if (testArray[index] > max) {
  max = testArray[index];
}
  return findMax(testArray, index +1);
}


function factorial(input, out=1){
  if (input-1 === 0){
    return out;
  }
    out = out*(input)
    input--;
    return factorial(input, out);
}


function fibonacci(n, out=[1,1],counter = 0){
  if (out[n] > 0 ){
  return out[n-1];
}
let temp = out[counter]+out[counter+1];
  out.push(temp);
  return fibonacci(n, out,counter+1);
}



function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
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
