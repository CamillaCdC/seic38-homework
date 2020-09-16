console.log("is this on");

// # Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// ## DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

//If else ----------------------------------------------------------------------
const drEvil = function(amount){
  if (amount >= 1000000){
  console.log( amount + " dollars (pinky)");
}
else
  console.log(amount + " dollars");
  return;
};

drEvil(10000);
drEvil(1000000);

//
// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
//
// Mix up characters with slice ------------------------------------------------
const mixUp = function(str1, str2){
  const str1Start = str1.slice(0,2);
  const str1End = str1.slice(2);
  const str2Start = str2.slice(0,2);
  const str2End = str2.slice(2);
  console.log(str2Start + str1End, str1Start + str2End);
  return;
};

mixUp("mix", "pod");
mixUp("dog", "dinner");


// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

// Hide occurences of first character in string --------------------------------
const fixStart = function(str){
  const first2Char = str.slice(0,1);
//const charOccur = str.slice(1);
//const result = charOccur.spilt("b").join("*"); // had this than relaised "b" needs to be variable.
  console.log(first2Char);
  return;
};
fixStart("babble");
fixStart("puppy");
/***** Use loop to deinfe occurences  ****/

//
// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//Function using string specified length and includes---------------------------
const verbing = function(str){
  if(str.length >=[3] &&! str.includes('ing') ){
    console.log(str + "ing");
  }
  else if(str.length >=[3] && str.includes('ing')){
    console.log(str + "ly");
  }
  else if (str.length <[3]) {
    console.log(str);
  }
};

verbing("swim");
verbing("swimming");
verbing("go");

// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function(str){
  if(str.includes('not') && str.includes('bad')){
    const isGood = str.split('not').shift();
    console.log(isGood + "good");
  }
  else if(str.includes('bad') && !str.includes('not')){
    console.log(str);
  }
  else if(!str.includes('not') && !str.includes('bad')) {
    console.log(str);
  }
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');

/*










*/
