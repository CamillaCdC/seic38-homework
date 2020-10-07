// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
// * isSquare - Returns whether the rectangle is a square or not
const rectangleA = {
  length: 7,
  width: 4
};

const isSquare = function (num){
  if (rectangleA.length === rectangleA.width) {
  return true
  } else {
    return false
  }
}
console.log(isSquare(rectangleA))



// * area - Returns the area of the rectangle
const areaOfRectangle = function() {
  const area = (rectangleA.length * rectangleA.width)
    return area;
}
console.log(areaOfRectangle(rectangleA));
// * perimeter - Returns the perimeter of the rectangle
const findPerimeter = function () {
  let perimeter = 2*(rectangleA.length + rectangleA.width)
    return perimeter;
  }


console.log(findPerimeter(rectangleA));



// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```
const triangleA = {
  sideA: 3,
  sideB: 6,
  sideC: 9
};

const whatTriangleAmI = function() {
  if (Math.pow(triangleA.sideC, 2) === (Math.pow(triangleA.sideA, 2) + (Math.pow(triangleA.sideB, 2)))) {
    console.log("the triangle is a right triangle")
  } else if (Math.pow(triangleA.sideC, 2) < (Math.pow(triangleA.sideA, 2) + (Math.pow(triangleA.sideB, 2)))) {
    console.log("this triangle is an acute triangle")
} else
  console.log("this triangle is an obtuse")
}


console.log(whatTriangleAmI(triangleA))


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const totalPrice = function () {
  let combineThemNumbers = (parseFloat(cartForParty.banana) + (parseFloat(cartForParty.handkerchief)) + (parseFloat(cartForParty.Tshirt)) +
  (parseFloat(cartForParty.apple)) +
  (parseFloat(cartForParty.nalgene)) + (parseFloat(cartForParty.proteinShake)))
  console.log(`${combineThemNumbers}`)
}

console.log(totalPrice(cartForParty))
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number'

//funny failed attempt :D //const confirmSubmit = function (number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16) {
//   if (number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12, number13, number14, number15, number16 >= 0 && =<9) {
//     return true;
//     console.log("your credit card number is valid")
//checking whether it is a number
// function checkInp()
// {
//   let x = [].value;
//   if (isNaN(x))
//   {
//     console.log("Must input numbers");
//     return false;
//   } else {
//     console.log('yay a number')
//   }
// }
//
// console.log(checkInp('not'))
// const validnumbers = checkInp()
function validateCreditCard(creditCardNumber) {


    // The credit card number must be 16 digits in length
    if (creditCardNumber.length === 16) {
        console.log("your credit card length is legit");
      } else {
        console.log("mate type it in properly sheez");
      }
// must be digits not working
 for (var i = 0; i < creditCardNumber.length; i++) {
     var currentNumber = creditCardNumber[i];
    if (isNaN(currentNumber) === false) {
         console.log("nice all numbers");
       } else {
         console.log("you typed in a letter you donkey")
       }
}
}
      console.log(validateCreditCard('544534533 4534532'));
