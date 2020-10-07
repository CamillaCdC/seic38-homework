// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num1) {
  return total = Math.pow(num1)
  console.log(`The result of squaring the number ${num1} is ${total}.`);
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num1){
  return result = num1/2
  console.log(`Half of ${num1} is ${halfNumber}.`);
};

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(obtain,total) {
  return (obtain*100/ total)
  console.log(`${obtain} is ${percentOf} of ${total}.`);
};
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  return area = Math.pi * radius * radius;
  console.log(Math.round(`The area for a circle with radius ${radius} is ${area}`));
};

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

// 1. collect data from halfnumber -> ans -> square out -> ans -> area -> ans -> percentage = solution Part 2
const calculateInDetail = function (Number) {
  const halfNumber = function(num1);
    return result1 = num1/2;
    console.log(`Half of ${num1} is ${halfNumber}.`);
  };

  const squareNumber = function (result1) {
    return result2 = Math.pow(result1)
    console.log(`The result of squaring the number ${result1} is ${result2}.`);
  };
  const areaOfCircle = function(result2) {
    return result3 = Math.pi * radius * radius
    console.log(Math.round(`The area for a circle with radius ${result2} is ${result3}`))
  };
  const percentOf = function(result4) {
    return result5 = (result4*0.5)
    console.log(`${result5} is 50% of ${result4}.`);
  };
return result1

};
