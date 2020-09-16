const squareNumber = function(number){
  const square = number * number;
  console.log(`The result of squaring the number ${number} is ${square}.`);
  return square;
};
squareNumber(3);
squareNumber(2);

const halfNumber = function(number){
  half = number / 2;
  console.log(`Half of ${number} is ${half}`);
  return half;
};

halfNumber(5);
halfNumber(2);

const percentOf = function(num1, num2=2){
  percent = (num2 / num1) * 100;
  console.log(`${num2} is ${percent}% of ${num1}.`);
  return percent;
};

percentOf(4, 2);
percentOf(100, 60);

const areaOfCircle = function(radius){
  const area = Math.PI * (radius * radius);
  const rounded = Math.floor(area * 100) / 100 ;
  console.log(`The area for a circle with radius ${radius} is ${rounded}`);
  return rounded;
};

areaOfCircle(1);
areaOfCircle(5);

let result = 5;
console.log(`${result}`);

result = halfNumber(result);
console.log(`${result}`);

result = squareNumber(result);
console.log(`${result}`);

result = areaOfCircle(result);
console.log(`${result}`);

result = percentOf(result);
console.log(`${result}`);
