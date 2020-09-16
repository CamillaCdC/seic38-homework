//----------PART 1 ----------
//Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num){
  const squaredNum = num*num;
  console.log(`The result of squaring the number is ${ squaredNum }.`);
  return squaredNum;
}
//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num){
  const halvedNum = num / 2;
  console.log(`Half of ${num} is ${halvedNum}.`);
  return halvedNum;
}
//Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(num1, num2){
  const percent = (num1/num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}
//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
  const area = Math.PI * (radius*radius);
  console.log(`The area for a circle with a radius of ${ radius } is ${ area.toFixed(2) }.`);
  return area.toFixed(2);
}

//----------PART 2 ----------

//Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

//Take half of the number and store the result.
//Square the result of #1 and store that result.
//Calculate the area of a circle with the result of #2 as the radius.
//Calculate what percentage that area is of the squared result (#3).

const doStuff = function(num){
  const halve = halfNumber(num);
  const squared = squareNumber(halve);
  const areaCircle = areaOfCircle(squared);
  const percentage = percentOf(areaCircle, squared);
}

//----------PART 3 ----------

//Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
//except it will add '(pinky)' at the end if the amount is 1 million.


const drEvil = function(amount){
  if (amount === 1000000){
    return `${amount} dollars (pinky)`;
  }else{
    return `${amount} dollars`;
  }
}

//Create a function called mixUp. It should take in two strings,
//and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
//You can assume that the strings are at least 2 characters long.

const mixUp= function(string1, string2){
  const newst1 = string2.slice(0,2)+string1.slice(2);
  const newst2 = string1.slice(0,2)+string2.slice(2);
  return `${newst1} ${newst2}`;
  console.log(`${newst1} ${newst2}`);
}

//Create a function called fixStart. It should take a single argument, a string,
//and return a version where all occurences of its first character have been replaced with '*',
//except for the first character itself. You can assume that the string is at least one character long.

const fixStart = function(word){
  const firstL = word[0];
  const regex = /firstL/gi;
  console.log(word.replaceAll(regex, '*'));
}

//Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
//it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged.

const verbing = function(word){
  if (word.length >= 3){
    if (word.slice(-3) === 'ing'){
      return word.concat('ly');
    }else{
      return word.concat('ing');
    }
  }else{
    return word;
  }
}
