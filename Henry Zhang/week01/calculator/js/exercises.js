console.log("it is my work");


// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string
// like "The result of squaring the number 3 is 9."
//
const squareNumber = function (number){
    const total = number *number;
    return total;
    console.log(`The result of squaring the number ${number} is ${total}.`);
}

squareNumber(5);
//
//
// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (numbers){
  const result = Math.floor(numbers/2);
  console.log(`Half of ${numbers} is ${result}.`);
  return result;
}

halfNumber(40);
//
// Write a function called percentOf that will take two numbers, figure out what
// percent the first number represents of the second number, and return the result.
//  It should also log a string like "2 is 50% of 4."
//
const percentOf = function(num1, num2){
    const result = Math.round(num1/num2*100);
    console.log(`${num1} is ${result}% of ${num2}`);
    return result;
}

percentOf(3, 8);

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a string
// like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
//

const areaOfCircle =function(radius){
  const result = Math.round(Math.PI*radius*radius);
  console.log(`The area for a circle with radius ${radius} is ${result}.`);
  return result;
}
areaOfCircle(23);

//
// Write a function that will take one argument (a number) and perform the following operations,
//  using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


const multiFunction =function (number){
    const half =halfNumber(number);
    const square =squareNumber(half);
    const area = areaOfCircle(square);
    const result = percentOf(area,squareNumber(area));
    return result;
    console.log(`the result is ...........${result}`);
}

multiFunction(3);
