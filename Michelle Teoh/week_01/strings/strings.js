// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(num) {
  if num === 1000000;
    console.log('${num} dollars /(pinky/)')
  };
  else; {
    console.log(`${num} dollars`)
  };

DrEvil(1000000)



// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(string1,string2) {
  const mixUp1 = (string1 + string2);
  const mixUp2 = (string2 + string1); {
    console.log(`${mixUp1}` + `${mixUp2}`)
  };
};






// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart function(string3) {
  for var i in string3[0];
  replace i[1:] === "*"
  console.log(`${string3} is ${i}`)
};






// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
const verbing function(string4) {
  if var letterIs3orMore in string4.length >= 3;
  console.log(`${string4} can be ${string4}ing`);
  else if var letterIncludeIng in string4 [-1:-3] === ing;
  console.log(`${string4}` can be ${string4}ly);
  else; {
    console.log(`$${string4}`)
  };
};

// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
const focusWord = "notbad"
const notBad = function(string5) {
  for var notBadIsInString in string5
  if notBadIsInString === "not" && "bad"
  return var notBadIsInString1 = focusWord.charAt[0:] in notBadIsInString to "good";
  console.log('${notBadIsInString1}')
  else; {
    return(string5)
  };
};
