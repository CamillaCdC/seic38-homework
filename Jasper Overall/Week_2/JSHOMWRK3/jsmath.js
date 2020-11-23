//Geometry Function Lab
//Part 1, Rectangle
//Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//isSquare - Returns whether the rectangle is a square or not
//area - Returns the area of the rectangle
//perimeter - Returns the perimeter of the rectangle
//Rectanglezzzz

const rectangulator = (rectangle) => {

  const width = rectangle.width;
  const length = rectangle.length;
  const rectangleProperties = {

isSquare: width === length,
area: width * length,
perimeter: width * 2 + length * 2,
}

 {
  if (this.length === this.width)
    return ("This is a square!")
    else " Not a square. "
    };


  rectangle.area = function() {
    return (this.length * this.width);
  }

  rectangle.peremiter = function() {
    return 2 * (this.length + this.width);
  }

  console.log(is.isSquare());
  console.log(rectangle.area());
  console.log(rectangle.perimeter());


//Triangle
 const triangulator = triangle => {

  sideA = 3,
  sideB = 4,
  sideC = 4,
}

 triangle.isEquilateral = function() {
  if (this.sideA == this.sideB && this.sideB == this.sideC){
    return "This is equilateral!";
  } else {
    return "This is not equilateral.";
  }

triangle.isIsosceles = function() {
  if(this.sideA == this.sideB && this.sideB == this.sideC) {
    return "This is equilateral, not isosceles.";
  } else if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
    return "This is isosceles!";
  } else {
    return "This is not isosceles.";
  }
}

triangle.area = function () {
  s = (this.sideA + this.sideB + this.sideC)/2;
  return math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
}

triangle.isObstute = function() {
  a = this.sideA ^ 2;
  b = this.sideB ^ 2;
  c = this.sideC ^ 2;
  if (a + b < c || a + c < b || b + c < a) {
    return "This is obtuse.";
  } else {
  return "This  not is obtuse";


console.log(triangle.isEquilateral());
console.log(triangle.isIsosceles());
console.log(triangle.isObtuse());



//  Part 2, Triangle
//  Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//  isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

//  const triangleA = {
//sideA: 3,
//sideB: 4,
//sideC: 4
// };



// // // The Cash Register
//  Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
// const cartForParty = {
//banana: "1.25",
//handkerchief: ".99",
// Tshirt: "25.01",
//apple: "0.60",
//nalgene: "10.34",
//proteinShake: "22.36"
// };

//Output
//cashRegister(cartForParty)); // 60.55
// Credit Card Validation
//You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.


//Number must be 16 digits, all of them must be numbers
//You must have at least two different digits represented (all of the digits cannot be the same)
//The final digit must be even
//The sum of all the digits must be greater than 16

//The following credit card numbers are valid:
//
//9999-9999-8888-0000
//6666-6666-6666-1666
//
//The following credit card numbers are invalid:
//
//a923-3211-9c01-1112 invalid characters
//4444-4444-4444-4444 only one type of number
//1111-1111-1111-1110 sum less than 16
//6666-6666-6666-6661 odd final number

// // Example

//validateCreditCard('9999-9999-8888-0000'); // Returns: true

//Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//




/////JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
// Bonus
//
//     Ensure that the accounts cannot have negative values.
//     Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
