console.log('is this on?');

// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the
// following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

//--------------------------------------------Part 1 Rectanlge -----------------

const rectangleA = {
  length: 4,
  width: 14
}

const inspectShape = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return 'Is a square';
  } else {
    return 'Is a rectangle';
  }
}

const area = function (rectangle) {
  return result = rectangle.width * rectangle.length;
}

const perimeter = function (rectangle) {
  let l = rectangle.length;
  let w = rectangle.width;
  return result = l + l + w + w;
}
console.log(`${inspectShape(rectangleA)} and has an area of ${area(rectangleA)} and a perimeter of ${perimeter(rectangleA)}`);

//-------------------------------------------Part 2, Triangle-------------------

// Given the following a `triangle` object like the one below, write the
// following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 2,
  sideB: 3,
  sideC: 1
}

//--------------------------------------------Type of Triangle------------------

const typeOfTriangle = function (triangle) {

  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;

  if (a === b && a === c ||
      b === c && b === a) {
      return 'Is an equilateral triangle'; //all sides of equal length.
   } else if (a === b && a !== c ||
              b === c && b !== a ||
              a === c && c !== b) {
     return 'Is an isosceles triangle';    //two sides of equal length
   } else {
     return 'Is a scalene triangle'       //no sides of equal length
   }
 }
console.log(typeOfTriangle(triangleA));

//------------------------------------------------Area of Triangle--------------

const areaOfTriangle = function (triangle) {

  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;

  const res = a + b + c;
  const result = res / 2;
  return result;
}
console.log(areaOfTriangle(triangleA));

//------------------------------------------------Obtuse Triangle---------------

const isObtuse = function (triangle) {

  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;

  if ( a * a + b * b === c * c ||
       a * a + c * c === b * b ||
       b * b + c * c === a * a) {
       return 'Is an Obtuse triangle';
   } else {
     return 'Is not an Obtuse triangle';
   }
 }
 console.log(isObtuse(triangleA));

//---------------------------------------------Cash Register--------------------

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart.

const shoppingCart = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
}

const cashRegister = function (cart) {
const result = cart.banana +
               cart.handkerchief +
               cart.Tshirt +
               cart.apple +
               cart.nalgene +
               cart.proteinShake;
return result;
}
console.log(`$ ${cashRegister(shoppingCart)}`);

// # Credit Card Validation
//
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards with a simple function
// called validateCreditCard that returns true or false.
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


const validateCreditCard = function (card) {

  let length = card.length === 16;  // has 16 digits
  let res = card.charAt(15);
  let isEven = res % 2 === 0;      // is even

console.log(length);

  const endIsEven = function () {
    if (endsWith) {
      return  'Card valid : ends with even number';
    } else {
      return  'Card invalid : ends with odd number';
    }
  }


}


console.log(`${validateCreditCard('4242424242424242')}`); // Returns: true


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
// Double Bonus*: Make your credit card scheme even more advanced!
//What are the rules, and what are some numbers that pass or fail?
//Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
