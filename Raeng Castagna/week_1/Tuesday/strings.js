// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays.
// For many of them, you will want to consult the JavaScript strings reference to find useful
// string methods to call.
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
// except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function (amount) {
  if (amount < 1000000) {
    console.log(`${amount} dollars`);
  } else {
    console.log(`${amount} dollars (pinky)`);
  };
};
drEvil(10);
drEvil(1000000);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of
// the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long.

const mixUp = function (string1, string2) {
  const words = string1.split()
  // const concatenation = string1.concat(string2);
  console.log(`${words} ${string2}`);
};
mixUp('cat', 'dog')
