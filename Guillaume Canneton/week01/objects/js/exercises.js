// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};
const rectangleB = {
  length: 4,
  width: 5
};
const isSquare = function(rectangle){
  if (rectangle.length === rectangle.width){
    return true;
  } else {
    return false
  }
}
console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

const area = function(rectangle){
  return rectangle.length * rectangle.width
}
console.log(area(rectangleA));
console.log(area(rectangleB));

const perimeter = function(rectangle){
  return 2 * (rectangle.length + rectangle.width)
}
console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleC = {
  sideA: 4,
  sideB: 5,
  sideC: 8
};
 const isEquilateral = function(triangle){
   if (triangle.sideA === triangle.sideB && triangle.sideA=== triangle.sideC){
     return `This triangle is equilateral.`
   } else {
     return `This triangle is not equilateral`
   }
 }
 console.log(isEquilateral(triangleA));
 console.log(isEquilateral(triangleB));
 console.log(isEquilateral(triangleC));

 const isIsoceles = function(triangle){
   if (triangle.sideA === triangle.sideB && triangle.sideA=== triangle.sideC){
     return `This triangle is not isoceles.`
   } else if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
     return `This triangle is isosceles.`
   } else {
     return `This triangle is not isoceles.`
   }
 }
 console.log(isIsoceles(triangleA));
 console.log(isIsoceles(triangleB));
 console.log(isIsoceles(triangleC));



const areaT = function(triangle){
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  let p = a + b + c;
  let area = Math.round(Math.sqrt( p * ( p - a ) * ( p - b ) * ( p - c ) ) * 100) / 100;
  return `The area is ${area}`
}
console.log(areaT(triangleA));
console.log(areaT(triangleB));
console.log(areaT(triangleC));

const isObtuse = function(triangle){
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  if ( a > b && a > c){
    if ( a * a > ( b * b + c * c )){
      return `The triangle is obtuse`;
    } else {
      return `This triangle is not obtuse`
    }
  } else if ( b > a && b > c){
    if ( b * b > ( a * a + c * c )){
      return `The triangle is obtuse`;
    } else {
      return `This triangle is not obtuse`
    }
  } else if ( c > b && c > a){
    if ( c * c > ( b * b + a * a )){
      return `The triangle is obtuse`;
    } else {
      return `This triangle is not obtuse`
    }
  } else {
    return `This triangle is not obtuse`
  }
}
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));

//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

const cashRegister = function(cart) {
  const cartList = Object.keys(cart);
  let total = 0;
  for ( i = 0; i < cartList.length; i++) {
    let item = cartList[i];
    total += cart[item];
  }
  return total
}
console.log (cashRegister(cartForParty));
// 60.55
// ```
//
//
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

// const validateCreditCard = function(creditNum){
//   if ( creditNum.length !== 16 ) {
//     return false
//   } else if (isNaN(creditNum)){
//     return false
//   } else if (creditNum % 2 !== 0 ){
//     return false
//   } else {
//     const creditNumArray = [''];
//     for ( i = 15; i >= 0; i--){
//       creditNumArray.push(creditNum[i])
//     }
//
//
//   }
// }

const creditNum = 1234567890123456;
const creditNumArray = [];
for ( i = 15; i >= 0; i--){
  creditNumArray.push(creditNum[i])
}
console.log(creditNumArray)

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
//
//
//
// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
