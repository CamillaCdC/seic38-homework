// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//

const rectangleA = {
  length: 4,
  width: 4
};


const isSquare= function (rectangleA) {
if (rectangleA.length=== rectangleA.width) {
  return false;
} else {
  return true;
}
};

const area= function (rectangleA) {
 return rectangleA.length*rectangleA.width;
};

const perimeter = function(rectangleA){
  return (rectangleA.length+rectangleA.width)*2;
};

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral=function(triangleA){
  if (triangleA.sideA===triangleA.sideB===triangleA.sidec) {
    return "triangle is equilateral ";
  } else {
    return "triangle is not equilateral ";
  }

}
// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles=function(triangleA){
  if (triangleA.sideA===triangleA.sideB || triangleA.sideA===triangleA.sideC || triangleA.sideB=== triangleA.sideC) {
    return "triangle is isIsosceles ";
  } else {
    return "triangle is not isIsosceles ";
  }

}
// * area - Returns the area of the Triangle


// * isObtuse - Returns whether the triangle is obtuse or not
//

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
