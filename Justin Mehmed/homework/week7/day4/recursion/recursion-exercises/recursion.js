// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, largest=-Infinity) {
    if (Array.length === 0 ){
        return largest;
    }
   if (array[0] > largest ){
       largest = array[0];

   }
   const rest = array.slice(1);

   return findMax(rest, length);
}

// ---------------------------------------------------------------


function factorial(n) {
   if (n == 1 || n == 0)
        return 1;
    else
        return n * factorial(n-1)
        }
    console.log(factorial(3))
    console.log(factorial(5))
    

// --------------------------------------------------------------------


function fibonacci(){
    
}

function coinFlips(tosses){
    const combinations = [];

    const flip = function (soFar="") {
      if (soFar.length === tosses) {
          combinations.push( soFar );
        }else {
            flip(soFar + "H");
            flip(soFar + "T");
        }
    }
    flip();
    return combinations
}

// ------------------------------------------------------------------------



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