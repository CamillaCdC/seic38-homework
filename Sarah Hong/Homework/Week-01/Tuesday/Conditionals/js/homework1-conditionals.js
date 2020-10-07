// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  let calcNumber = number * 3;
  console.log(`The result of squaring the number ${ number } is ${ calcNumber }.`)
}

squareNumber(3);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
    let calcNumber = number / 2;
    calcNumber = calcNumber.toFixed(2);
  console.log(`Half of ${ number } is ${ calcNumber }`)
}

halfNumber(5);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (number1, number2) {
  let calcPercentage = 100 / 2;
  console.log(`${ number1 } is ${ calcPercentage }% of ${ number2 }.`)
}

percentOf(2, 4);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.


// const areaOfCircle = function (radius) {
//   let calcArea = 2 * Math.PI * radius;
//   console.log(`The area for a circle with radius ${ radius } is ${ calcArea }.`)
// }
//
// areaOfCircle(2);

const areaOfCircle = function (radius) {
  let calcArea = 2 * Math.PI * radius;
  calcArea = calcArea.toFixed(2);
  console.log(`The area for a circle with radius ${ radius } is ${ calcArea }.`)
}

areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const firstStoredNumber = function (number) {
  let divisionNumber = number / 2;
  console.log(`Half the number of ${ number } is ${ divisionNumber }.`)
}

firstStoredNumber(9);

const secondStoredNumber = function (number) {
  let squaredNumber = number * 2;
  console.log(`The square result of ${ number } is ${ squaredNumber }.`)
}

secondStoredNumber(4.5);

const calcAreaNumber = function (radius) {
  let area = 2 * Math.PI * radius;
  area = area.toFixed(2);
  console.log(`The area of a circle with the radius of ${ radius } is ${ area }.`)
}

calcAreaNumber(9);

const percentOfArea = function (area, radius) {
  let resultPercentage = area / 100 * radius;
  resultPercentage = resultPercentage.toFixed(2);
  console.log(`The percentage of ${ area } is ${ resultPercentage }%.`)
}

percentOfArea(56.55, 9);
