// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
};
const rectArea = function (rectangle) {
  return rectangle.length * rectangle.width;
};

const rectPerimeter = function (rectangle) {
  return 2 * (rectangle.length + rectangle.width);
};

const rectA = {
  length: 20,
  width: 20,
};
const rectB = {
  length: 20,
  width: 10,
};

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
    return true;
  } else {
    return false;
  }
};

const isIsosceles = function (t) {
  if (isEquilateral(t)) {
    return true;
  }else if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
};

const triArea = function (t) {
  const hp = (t.sideA + t.sideB + t.sideC) / 2; //hp = half of the perimeter
  const formula = hp*(hp-t.sideA)*(hp-t.sideB)*(hp-t.sideC);//herons formula to find area of triangle (needs to be square rooted)
  return Math.sqrt(formula).toFixed(2);
  }

const isObtuse = function (t) {
  if (Math.pow(t.sideC, t.sideC) > Math.pow(t.sideA, t.sideA) + Math.pow(t.sideB, t.sideB)){
    return true;
  } else {
    return false;
  }
}

const triA = {
  sideA: 29,
  sideB: 29,
  sideC: 55,
};
const triB = {
  sideA: 355,
  sideB: 239,
  sideC: 100,
};
const triC = {
  sideA: 2,
  sideB: 3,
  sideC: 2,
};

// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cashRegister = function (cart) {
  let sum = 0;
  const costs = Object.values(cart);
  for (v = 0; v < costs.length; v++) {
    sum += parseFloat(costs[v]);
  }
  return `The total price is $${ sum }.`;
}

const shoppingCart = {
  milk: "2.5",
  cheese: "3",
  cereal: "3.6",
  eggs: "3",
  bread: "3",
}


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

const validateCreditCard = function (cardNo) {
  const dashlessString = cardNo.replaceAll('-', '');
  const dashlessNum = parseInt(dashlessString);
  if (dashlessString.length === 16 && dashlessString.match("[0-9]+")) {
    for (i = 0; i < dashlessString.lenght; i++){
      // coming back to this one
      // correct output for isNumber and is length of 16 check
    }
  } else {
    return false;
  }

}
num = '5678-4543-2455-9987';
