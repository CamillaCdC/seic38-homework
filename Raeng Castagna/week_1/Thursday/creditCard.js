// # Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const validateCreditCard = function (num) {
  const price = num.charAt(10)
  console.log(price);
  };
  console.log(validateCreditCard(`9999-9999-8888-0000`));
  const removeDash = num.replace(/\-/g, '').length; // g at end of search means global. 
  //
  // for( let i = 0; i < num.length; i++ ) {
  //   num.replace('-', '')[i];
  //   console.log(i);
  // };


  // determine at least 16 digits
  // const checkSixteenDigits = num.length;
  // const checkAllNumbers = num.match(/0-9/g);


  // sum of all digits must be greater than 16
  // let sum = 0;
  // let splitStr = num.split('');
  // for (let i = 0; i < splitStr.length; i++) {
  //   sum += parseInt(splitStr[i])
  // }


  // // final digit could use charAt(), length with a loop?


// The following credit card numbers are valid:


// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true



// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
