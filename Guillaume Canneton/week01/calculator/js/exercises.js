// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(number){
  const squareNum = number * number;
  console.log(`The result of squaring the number ${number} is ${squareNum}.`)
}
squareNumber(3);
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(number){
  const halfNumber = number / 2;
  console.log(`Half of ${number} is ${halfNumber}`)
}
halfNumber(5);
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(partNumber, total){
  const percent = Math.round(100 * (100 * partNumber / total)) / 100;
  console.log(`${partNumber} is ${percent}% of ${total}`)
}
percentOf(12.5, 55);
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
unction areaOfCircle(radius){
  const area = Math.round((2 * Math.PI * radius * radius) * 100) / 100;
  console.log(`The area for a circle with radius ${radius} is ${area}`);
}
areaOfCircle(3)

//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

function theCircle(theNumber){
  const halfNumber = theNumber/ 2;
  const squareNumber = halfNumber * halfNumber;
  const areaOfCircle = 2 * Math.PI * squareNumber * squareNumber;
  const percentage = Math.round(100 * (100 * areaOfCircle / squareNumber)) / 100;
}

function theCircle2(theNumber){
  const halfnumber = halfNumber(theNumber);
  const squareNumber = squareNumber(halfNumber);
  const areaOfCircle = areaOfCircle(squareNumber);
  const percentage = percentOf(areaOfCircle, squareNumber);
}
