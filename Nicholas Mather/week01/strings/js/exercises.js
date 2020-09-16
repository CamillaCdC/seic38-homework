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

const drEvil = function (dollars) {
  let num = dollars
  const evil =  1000000
  if (num == evil) { //true
    console.log(`${dollars} dollars (pinky)`);
  } else {
    console.log(`${dollars} dollars`);
  }
};

drEvil(10);
drEvil(1000000);
//This is somewhat backasswards, but I couldn't get it to work as dollars = 1000000 in the brackets after if



// ## MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp = function(string1, string2) {
  const word1 =  string2.substring(0,2) + string1.substring(2);
  const word2 =  string1.substring(0,2) + string2.substring(2);
  console.log (`${word1} ${word2}`);
};
mixUp('mix','pod');
mixUp('spoon','fork');


//
// ## FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
//

const fixStart = function (stringIn) {
  const first = stringIn[0];
  const allReplaced= stringIn.replaceAll(first, '*');
  const startFixed= allReplaced.replace('*', first);
  console.log(startFixed);

};

fixStart('babble');
fixStart('lollapalooza');

// ## Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```
//

const verbing = function(string) {
  const wordLength = string.length;
  const last3 = (string.substr(wordLength - 3));
  if (wordLength < 3 ) {
    console.log(string);
  } else if (last3 === "ing") {
    console.log(string + "ly");
  } else {
      console.log(string + "ing");
  };
};

verbing('swim');
verbing('swimming');
verbing('go');
verbing('hop');
verbing('concatenate');

// cannot get the if/else if working. can console.log the wordLength and last3 constants


// ## Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//

const notBad = function(string) {
  const not = string.indexOf('not');
  const bad = string.indexOf('bad');
  const length = string.length;
  if (not < bad && not > -1) {
    const part1 = string.slice(0, not);
    const part2 = string.slice(bad + 3);
      console.log(part1 + "good" + part2);
  } else {
    console.log(string);
  }
  console.log(`${not} ${bad}`);
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad("It's not a bad thing, really.");
notBad('This dinner is bad!');

// Not quite there with the removal of things between not and bad
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```
