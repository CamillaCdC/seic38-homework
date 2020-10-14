// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

let square;
const squareNumber = function (number) {
    square = number * number;
    console.log(`The result of squaring the number ${number} is ${square}.`);
};

squareNumber(4);
squareNumber(2);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

let half;
const halfNumber = function (number) {
  half = number / 2
  console.log(`Half of ${number} is ${half}.`);
};

halfNumber(4);
halfNumber(2);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

let percent;
const percentOf = function(num1, num2) {
  const decimal =  num1 / num2;
  percent = Number.parseFloat( decimal * 100 ).toFixed(2);
  console.log(`${num1} is ${percent}% of ${num2}.`);
};

percentOf(2, 4);
percentOf(2, 6);
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

let area;
const areaOfCircle = function(radius) {
  area = Number.parseFloat( Math.PI * radius * radius).toFixed(2); // PI r^2, to two decimal places
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
};

areaOfCircle(2);
areaOfCircle(12);

// - Bonus: Round the result so there are only two digits after the decimal.

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const doMaths = function(number) {
  halfNumber(number);
  squareNumber(half);
  areaOfCircle(square);
  percentOf(area, square);
};

doMaths(4);
doMaths(42);
