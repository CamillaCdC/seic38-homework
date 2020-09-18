// # Geometry Function Lab
// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

const rectangleA = {
  length: 4,
  width: 4
};

// * isSquare - Returns whether the rectangle is a square or no
const isSquare = function (square) {
  if (square.length === square.width) {
    return `This is a square`;
  } else {
    return 'This is not a square';
  };
};
console.log(isSquare(rectangleA));

// * area - Returns the area of the rectangle
const area = function (num) {
  const find = num.length * num.width;
  return find;
};
console.log(area(rectangleA));

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function (num) {
  const find = num.length * 2 + num.width * 2;
  return find;
};
console.log(perimeter(rectangleA));

// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (num) {
  if (num.sideA === num.sideB && num.sideA === num.sideC) {
    return `This is a equilateral triangle.`
  } else {
    return `This is not an equilateral triangle. `
  }
};
console.log(isEquilateral(triangleA));

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (num) {
  if (num.sideA === num.sideB && num.sideA !== num.sideC || num.sideA === num.sideC && num.sideA !== num.sideB || num.sideB === num.sideC && num.sideB !== num.sideA) {
    return `This is an isosceles`;
  } else {
    return `Not an isosceles triangle`;
  };
};
console.log(isIsosceles(triangleA));

// * area - Returns the area of the Triangle
const areaTriangle = function (num) {
  const perimeter = (num.sideA + num.sideB + num.sideC)/2;
  const area = Math.sqrt(perimeter * ((perimeter-num.sideA) * (perimeter-num.sideB) * (perimeter-num.sideC)))
  return area;
};
console.log(areaTriangle(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not
// ******* come back to this, the formula is incorrect.
const isObtuse = function (num) {
  const area = 0.5 * num.sideA * num.sideB;
  if (area) { // ***this isnt asking anything, need to clarify. 
    return `Obtuse triangle`;
  } else {
    return `Not an obtuse`
  };
};
console.log(isObtuse(triangleA));
