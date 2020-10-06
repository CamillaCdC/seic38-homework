// Geometry Function Lab

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


// QUESTION: 1. Returns whether the rectangle is a square or not
const rectangleA = {
  length: 4,
  width: 4
};

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(25))


// QUESTION: 2. area - Returns the area of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const area = function(length, width) {
  total = length * width
  return total
}

console.log (area(rectangleA.length,rectangleA.width))

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

// QUESTION: 1. isEquilateral - Returns whether the triangle is equilateral or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4

var isEquilateral = function(s1, s2, s3) {
	if (s1 === s2 && s1 === s3) {
    return true;
  }
  return false;
};

console.log(isEquilateral(triangleA.sideA,triangleA.sideB,triangleA.sideC))


// QUESTION: 2. isIsosceles - Returns whether the triangle is isosceles or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4

var isosceles = function(s1, s2, s3) {
  if (s1 === s2 || s1 === s3 || s2 === s3) {
    return true;
  }
  return false;
};

console.log(isEquilateral(triangleA.sideA, triangleA.sideB, triangleA.sideC))




// QUESTION: 3. area - Returns the area of the Triangle

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4

const area = function(s1, s2, s3) {
  let s = (s1 + s2 + s3) / 2;
  let areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
};
console.log(area(triangleA.sideA, triangleA.sideB, triangleA.sideC));


// QUESTION: 4. isObtuse - Returns whether the triangle is obtuse or not
//Obtuse solution : If a'2 + b'2 < c'2, then it is obtuse triangle.
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4

const isObtuse = function (s1,s2, s3) {
  if (Math.pow(s1,2) + Math.pow(s2,2) <= Math.pow(s3)) {
    return true;
  }
}

console.log(isObtuse(triangleA.sideA, triangleA.sideB, triangleA.sideC));









// };
