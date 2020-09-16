// The Calculator

// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
console.log("Part 1\n");

function squareNumber(a){
  let squareA = a**2;
  console.log(`The result of squaring the number ${a} is ${squareA}.`);
  return (squareA);
}
//squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(a){
  let halfA = a/2;
  console.log(`Half of ${a} is ${halfA}.`);
  return (halfA);
}
//halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(a,b){
  let pOf = a/b*100;
  pOf = pOf.toFixed(2);
  console.log(`${a} is ${pOf}% of ${b}.`);
  return (pOf);
}
//percentOf(2.5,4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(r){
  let areaC = Math.PI * r**2;
  areaC = areaC.toFixed(2);
  console.log(`The area for a circle with radius ${r} is ${areaC}.`);
  return (areaC);
}
//areaOfCircle(r=2);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

console.log("Part 2\n")

function allOperation(a){
  let x = halfNumber(a);
  let y = squareNumber(x);
  let z = areaOfCircle(y);
  let w = percentOf(z,squareNumber(z));
}
allOperation(4);
