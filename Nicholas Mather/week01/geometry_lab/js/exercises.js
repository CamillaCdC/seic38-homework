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

const rectangleB = {
  length: 6,
  width: 2
};

const isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
};

const rectangleArea = function(rectangle) {
  let output = rectangle.length * rectangle.width;
  return output;
};

const rectanglePerimeter = function(rectangle) {
  let output = rectangle.length * 2 + rectangle.width * 2;
  return output;
};

//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleC = {
  sideA: 10,
  sideB: 9,
  sideC: 18
};

//Find and order triangle sides
const orderSides = function(sidesArray) {
  sidesArray.sort(function(a, b) {
    return a - b;
  });
}

const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    console.log("It's equilateral!");
    return true;
  } else {
    console.log("Not equilateral.");
    return false;
  }
};

const isIsosceles = function(triangle) {
  let relAB= triangle.sideA === triangle.sideB;
  let relBC= triangle.sideB === triangle.sideC;
  let relCA= triangle.sideC === triangle.sideA;
  if (relAB  && relBC) {
    console.log("Not isosceles.");
    return false;
  }  else if (relAB || relBC || relCA) {
    console.log("It's isosceles!");
    return true;
  } else {  //I should re-write this to be more DRY
    console.log("Not isosceles.");
    return false;
  }
};

//Heron's Formula: sqrt(p(p-a)(p-b)(p-c)) where p = 1/2 perimeter and a/b/c = sides

const triangleArea = function(triangle) {
  let a = triangle.sideA;
  let b = triangle.sideB;
  let c = triangle.sideC;
  let p = (a + b + c) / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return area;
}

const isObtuse = function(triangle) {
  //for obtuse triangles, a^2 + b^2 < c^2 where c is the longest side
  //find the longest side, assign it to c
  let sides = [triangle.sideA, triangle.sideB, triangle.sideC]; // pull sides from object and put into string
  orderSides(sides); // order the string smallest to largest
  let a = sides[0];
  let b = sides[1]; // put smallest in a, middlest in b and biggest in c
  let c = sides[2];
  //find out if a^2 + b^2 < c^2 === true
  if (a * a + b * b < c * c ) {
    console.log("It's obtuse!");
    return true;
  } else {
    console.log("Not obtuse.");
    return false;
  }
}
