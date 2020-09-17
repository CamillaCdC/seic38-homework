// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument
//(a number), square that number, and return the result. It should also log a string
//like "The result of squaring the number 3 is 9."
const squareNumber = function (num1) {
  const sqNumber = num1 * num1; // here is the mathmatical function to square a number
  console.log(sqNumber);
  return sqNumber;
};
squareNumber(3);
squareNumber(12);
squareNumber(144);

//
// Write a function called halfNumber that will take one argument
// (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num1) {
  const haNumber = num1 / 2;
  console.log(`half of ${ num1 } is ${ haNumber }`);
  return haNumber;
};
halfNumber(5);
halfNumber(16);
halfNumber(32);
halfNumber(512);

//
// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number,
// and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const peOf = num1 / num2;
  const percentage = (peOf * 100);
  const percentRounded = Math.ceil(percentage * 100) / 100; // Bonus: Round the result so there are only two digits after the decimal.
  console.log(`${ num1 } is ${ percentRounded }% of ${ num2 }`);
  return peOf;
};
percentOf(23, 80);


//
// Write a function called areaOfCircle that will take one argument
// (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is
// 12.566370614359172.


const areaOfCircle = function (radius) {
  const theRadius = radius * radius * Math.PI;
  const radiusRounded = Math.ceil(theRadius * 100) / 100; // Bonus: Round the result so there are only two digits after the decimal.
  console.log(`the area for a circle with a radius of ${ radius } is ${ radiusRounded }`);
  return theRadius;
};
areaOfCircle(2);
areaOfCircle(8);
areaOfCircle(31);

//
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
// js-homework-2.md
const usingOtherFunctions = function (num1) {
  const half = halfNumber(num1);
   const squared = squareNumber(half);
   const area = areaOfCircle(squared);
   const percent = percentOf(squared, area);

};

usingOtherFunctions(4);
