console.log("is this on");

// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
//

// Function for calculating the square root ------------------------------------
const squareFunction = function(num1) {
  const result = num1 * num1;
  console.log(`The result of squaring the number ${num1} is ${result}.`)
  return result;
};

squareFunction(3);

// Function for dividing a number by 2 -----------------------------------------
const halfNumber = function(num1) {
  const result = num1 / 2;
  console.log(`Half of ${num1} is ${result}.`);
  return result;
};

halfNumber(5);

// Function for calculating the percentage -------------------------------------
const percentOf = function(num1, num2){
  const result = num2 / num1;
  console.log(`${num1} is 50% of ${num2}.`);
  return result;
};

percentOf(2, 4);

// Function for calculating the area of a circle -------------------------------
const areaOfCircle = function (radius){
  const result = Math.floor(Math.PI * (radius * radius));
  console.log(`The area for a circle with radius ${radius} is ${result} `);
  return result;
};

areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

// Calculator function ---------------------------------------------------------
const calculator = function(number){
  const res1 = halfNumber(number);
  const res2 = squareFunction(res1);
  const res3 = areaOfCircle(res2);
  const result = percentOf(res3, res2 );
  console.log(`the calculator function is complete`);

return;
};

calculator(10);
