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
// - `9999-9999-8888-0000`
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

// const validateCreditCard = (cardNumber) => {
//   let cardLegit = {
//     "Tests Passed": [],
//     "Tests Failed": [],
//     Valid: "",
//     Number: "",
//   };
//   const cardArray = cardNumber
//     .split("-")
//     .join("")
//     .split("")
//     .map((index) => (index = +index));
//   cardLegit.Number = cardArray.join("");
//   const checkForNumbers = (index) => typeof index === "number" && !isNaN(index); // checks that only numbers exist
//   const checkForVariety = (index) => index === cardArray[0];
//   const checkLastDigit = () => {
//     const checkIfEven = cardArray.pop();
//     return checkIfEven % 2 === 0;
//   };
//   const checkForSum = (accumulator, currentValue) => accumulator + currentValue;
//   if (cardArray.every(checkForNumbers)) {
//     // test for numbers only
//     cardLegit["Tests Passed"].push("Only contains numbers");
//     if (cardArray.reduce(checkForSum) > 16) {
//       // if we only contain numbers, check the sum total of those
//       cardLegit["Tests Passed"].push("Sum of numbers < 16");
//     } else {
//       cardLegit["Tests Failed"].push("Sum of numbers > 16");
//     }
//   } else {
//     cardLegit["Tests Failed"].push("Contains something other than numbers");
//   }
//   if (cardArray.every(checkForVariety)) {
//     // test that the card contains a variety of numbers
//     cardLegit["Tests Failed"].push("Only contains the same number");
//   } else {
//     cardLegit["Tests Passed"].push("Contains a variety of numbers");
//   }
//   if (checkLastDigit()) {
//     // test the last digit of the card
//     cardLegit["Tests Passed"].push("Last digit is Even");
//   } else {
//     cardLegit["Tests Failed"].push("Last digit is Odd");
//   }
//   if (cardLegit["Tests Failed"].length === 0) {
//     cardLegit.Valid = "True";
//   } else {
//     cardLegit.Valid = "False";
//   }
//   return cardLegit;
// }
