// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999ç8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
const card1 = {number: '9999-9999-8888-0000', expiry: '2021-02' };
const card2 = {number: '6666-6666-6666-1666', expiry: '2021-07' };
const card3 = {number: 'a923-3211-9c01-1112', expiry: '2023-03' };
const card4 = {number: '4444-4444-4444-4444', expiry: '2025-06' };
const card5 = {number: '1111-1111-1111-1110', expiry: '2022-02' };
const card6 = {number: '6666-6666-6666-6661', expiry: '2027-07' };
const card7 = {number: '0245-3939-7743-2022', expiry: '2020-02' };
const card8 = {number: '0265-4949-2322-7706', expiry: '2021-13' };
const card9 = {number: '0265-4949-2322-7706', expiry: 'Beans!' };


const validateCreditCard = function(card) {
  let noDash = (card.number).replaceAll('-', '' ); // remove dashes
  let allNum = true; //holder for legal number state
  let sameNum = true; //holder for same character state
  let cardSum = 0; //holder for sum of card numbers
  let error = ''; //holder for error message
  let exDate = Date.parse(card.expiry); // holder for date in js format
  const output = {valid: true, number: card.number} //object to be returned
  for (i = 0; i < noDash.length; i++) { // check for non number characters
    // if (noDash[i] !== '0' &&
    //     noDash[i] !== '1' &&
    //     noDash[i] !== '2' &&
    //     noDash[i] !== '3' &&
    //     noDash[i] !== '4' &&
    //     noDash[i] !== '5' &&
    //     noDash[i] !== '6' &&
    //     noDash[i] !== '7' &&
    //     noDash[i] !== '8' &&
    //     noDash[i] !== '9')  {
    //       allNum = false;
    //  }
    if (noDash[i] * 0 != 0) { //new method to check for non-number characters
    allNum = false
    }
  }
  for (i = 0; i < noDash.length; i++) { //find sum of card numbers and store in cardSum
    cardSum += parseInt(noDash[i], 10);
  }
  for (i = 1; i < noDash.length; i++) {
    if (noDash[i] !== noDash[i - 1]) { // if a number isn't equal to the one before it, not all numbers are the same, so set sameNum to false
      sameNum = false;
    }
  }

  if (noDash.length != 16) { // check length
    output.error = 'Card number must be 16 digits long.';
    output.valid = false;
  } else if (allNum === false) { //set return for non numbers
    output.error = 'Characters other than numbers are not permitted';
    output.valid = false;
  } else if (cardSum < 16) { //sum of all numbers
    output.error = 'Sum of the card number must be greater than 16';
    output.valid = false;
  } else if (sameNum === true) {  //all numbers the same
    output.error = 'A card number cannot consist of a single repeated number';
    output.valid = false;
  } else if (noDash[noDash.length - 1] % 2 !== 0) { //check last number is even
    output.error = 'the last number must not be odd';
    output.valid = false;
  } else if (exDate <= Date.now()) {
    output.error = 'card expired';
    output.valid = false;
  } else if (exDate * 0 !== 0) {
    output.error = 'invalid date';
    output.valid = false;
  } else {
    output.valid = true;
  }
  return output;
};

console.log(validateCreditCard(card1));
console.log(validateCreditCard(card2));
console.log(validateCreditCard(card3));
console.log(validateCreditCard(card4));
console.log(validateCreditCard(card5));
console.log(validateCreditCard(card6));
console.log(validateCreditCard(card7));
console.log(validateCreditCard(card8));
