//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squarenumber = function (x, y) {
  console.log(`the result of sqauring the number ${x} is ${y}`);

};
  squarenumber(3, 9);


//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfnumber = function (fullnumber, halvednumber)
{
 fullnumber = 5;
 halvednumber = 2;
  console.log(`Half of ${fullnumber} is ${halvednumber}`)
};

halfnumber();

//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (number1, number2) {
  const percentageResult = number1 / number2 * 100;
  console.log(`${number1} is ${percentageResult}% of ${number2}`)

};

percentOf(5, 10);

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {

  area1 = 2 * Math.PI * radius;
  console.log(`The area for a circle with radius ${radius} is ${area1}`);
}

areaOfCircle(2);

//BONUS


//Take half of the number and store the result.

const number = 4;

function rule () {
 const newNumber = number / 2;
  console.log (newNumber);
  return (newNumber);

};

rule();
let Halved = rule();

//Square the result of #1 and store that result.

function squareIt() {
const full = Halved * Halved;
console.log(`${full}`)
return (full)
};

squareIt();
let bigRadius = squareIt();

//Calculate the area of a circle with the result of #2 as the radius.

function circle() {
const circumfrence = 2 * 3.14 * bigRadius;
  console.log(`${circumfrence}`);
  return (circumfrence);
};

circle();
let finalArea = circle();

//Calculate what percentage that area is of the squared result (#3).

function area() {
  const areacircle = 3.14 * bigRadius ** 2;
  console.log (areacircle)
}

area();
