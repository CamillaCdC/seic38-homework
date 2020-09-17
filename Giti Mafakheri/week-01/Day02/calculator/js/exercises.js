console.log('test');


// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber=function(num){

const sqr = num *num ;
  console.log(`The result of squaring the number ${num} is ${sqr}.`);
}
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (num) {
  const result = num/2;
//  return result;
  console.log(`Half of ${num} is ${result}`);
}
halfNumber(10);
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."
const percentOf=function ( first , second) {

const result = (first*100)/second;
console.log(`${first} is ${result}% of ${second}.`);

}
percentOf(2,4);

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(rad){
const area =  rad * rad * 3.141592654;
const roundedArea =area.toFixed(2)
console.log(`The area for a circle with radius ${rad} is ${roundedArea}.`);
}
areaOfCircle(2);

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



const final = function(num){
  const half = halfNumber(num);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percentage = percentOf(area,square);
}
