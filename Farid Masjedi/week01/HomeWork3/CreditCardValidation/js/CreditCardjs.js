// Credit Card Validation

// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
console.log('\nCredit Card Validation\n\n');

function validateCreditCard(cardNum){

  cardNum = cardNum.replaceAll('-','');

  let condition1 = (cardNum.length === 16);
  if (!condition1){
    return `error: The credit card number should be 16 numbers`;
  }

  for (i of cardNum.valueOf()){
    if ( isNaN( Number(i) ) ){
      return `error: All the characters should be numbers.`
    }
  }

  let condition2 = (Number(cardNum[cardNum.length-1])%2 === 0);
  if (!condition2){
    return `error: The final digit should be even number`;
  }

  let sumNum = 0;
  for(i of cardNum.valueOf()){
    sumNum += Number(i);
  }
  let condition3 = (sumNum < 16);
  if (condition3){
    return `error: The sum of all the digits must be greater than 16.`
  }

  let isNumsEqual = 0;
  for (i=1; i<cardNum.length; i++){
    if (Number(cardNum[i]) !== Number(cardNum[0])) {
      isNumsEqual = 1;
      break;
    }
  }
  let condition4 = (isNumsEqual === 0)
  if (condition4){
    return `error: You must have at least two different digits represented.`
  }
  return 'The credit card number is valid.'
}

 console.log(validateCreditCard('9999-9999-8888-0000'));
 console.log(validateCreditCard('6666-6666-6666-1666'));
 console.log(validateCreditCard('a923-3211-9c01-1112'));
 console.log(validateCreditCard('4444-4444-4444-4444'));
 console.log(validateCreditCard('1111-1111-1111-1110'));
 console.log(validateCreditCard('6666-6666-6666-6661'));


// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
console.log('\nCredit Card Validation - Bonus Part\n\n');

function isCreditCardValid(cardNumber){

  const beingValidCondition = ( validateCreditCard(cardNumber) === 'The credit card number is valid.');

  let obj = {};
  obj.valid = beingValidCondition;
  obj.number = cardNumber;
  if (!beingValidCondition){
    const validityResult = validateCreditCard(cardNumber);
    obj.error = validityResult.slice(7,validityResult.length);
  }

  return obj;
}

console.log(isCreditCardValid('9999-9999-8888-0000'));
console.log(isCreditCardValid('6666-6666-6666-1666'));
console.log(isCreditCardValid('a923-3211-9c01-1112'));
console.log(isCreditCardValid('4444-4444-4444-4444'));
console.log(isCreditCardValid('1111-1111-1111-1110'));
console.log(isCreditCardValid('6666-6666-6666-6661'));

// Double Bonus: Make your credit card scheme even more advanced! What are the rules,
// and what are some numbers that pass or fail? Ideas: check expiration date!
// Check out the Luhn Algorithm for inspiration.

console.log('\nCredit Card Validation - Double Bonus Part - Luhn Algorithm\n\n');

function luhnCreditCardValidation(cardNumbers){

  const beingValidCondition = ( validateCreditCard(cardNumbers) === 'The credit card number is valid.');

  if (!beingValidCondition){

    return validateCreditCard(cardNumbers);

  }else{

    cardNumbers = cardNumbers.replaceAll('-','');
    let db = 0;
    for (i=cardNumbers.length-2; i>=0; i = i-2){
      let dbNum = Number(cardNumbers[i])*2;
      let r = Number(cardNumbers[i-1]);
      if (isNaN(r)) {
        r = 0;
      }

      db = db + dbNum%10 + Math.floor(dbNum/10) + r;
    }

    let rmNum = db%10;
    if (rmNum === 10) {
      rmNum = 0;
    }

    let luhnCondition = (Number(cardNumbers[cardNumbers.length-1]) === 10-rmNum);
    if (luhnCondition){
      return `According to "Luhn Algorithm", the Credit card number is valid too.`
    }else{
      return `According to "Luhn Algorithm", the Credit card number is not valid.`
    }

   }
}

// The following credit card numbers is valid acoording to Luhn algorithm.
// Source:'https://www.freeformatter.com/credit-card-number-generator-validator.html';

console.log(luhnCreditCardValidation("6371-5876-4963-6408"));
console.log(luhnCreditCardValidation("3534-0519-6728-1744"));

// According to Luhn algorithm, if i change the final digit number of the above credit card numbers, -
// - it should return that they are not valid.
// Remeber that the final number should be an even number.

console.log(luhnCreditCardValidation("6371-5876-4963-6402"));
console.log(luhnCreditCardValidation("3534-0519-6728-1746"));


// Farid Masjedi rules :
// - At least one of the digits should be a prime number.
// As we are working with the digits, they can just be 2, 3, 5 or 7.
// - The first digit can not be a prime number.

console.log('\nCredit Card Validation - Double Bonus Part - Farid rules\n\n');

function faridCreditCardValidation(creditCardNumbers){

  const beingValidCondition = ( validateCreditCard(creditCardNumbers) === 'The credit card number is valid.');

  if (!beingValidCondition){

    return validateCreditCard(creditCardNumbers);

  }else{
    creditCardNumbers = creditCardNumbers.replaceAll('-','');
    let primeArray = ['2','3','5','7'];

    if (primeArray.includes(creditCardNumbers[0])){
      return `The first digit should not be a prime number.`
    }

    let faridCondition = false;
    for (i=0; i<primeArray.length; i++){
      let pCondition = (creditCardNumbers.includes(primeArray[i]));
      if (pCondition){
        faridCondition = true;
        break;
      }
    }

    if (!faridCondition){
      return 'At least one of the digits should be a prime number.'
    }

    return `According to Farid rules, This credit card number is valid.`

    }

  }

console.log(faridCreditCardValidation("6371-5876-4963-6408"));
console.log(faridCreditCardValidation("5371-5876-4963-6408"));
console.log(faridCreditCardValidation("6481-1886-4964-6408"));


console.log('\nCredit Card Validation - Double Bonus Part - Adding Luhn and Farid rules\n\n');

function isCreditCardValid_PlusLuhn_PlusFarid(myCreditCardNumber){
  let addedObj = isCreditCardValid(myCreditCardNumber);


  let cond1 = (luhnCreditCardValidation(myCreditCardNumber) === 'According to "Luhn Algorithm", the Credit card number is not valid.');
  let cond2 = (faridCreditCardValidation(myCreditCardNumber) === 'According to Farid rules, This credit card number is valid.');

  addedObj.LuhnValidation = cond1;
  addedObj.FaridValidation = cond2;

  return addedObj;
}
console.log(isCreditCardValid_PlusLuhn_PlusFarid("6481-1886-4964-6408"));
console.log(isCreditCardValid_PlusLuhn_PlusFarid("6371-5876-4963-6408"));
console.log(isCreditCardValid_PlusLuhn_PlusFarid("6481-1886-4965-6308"));
