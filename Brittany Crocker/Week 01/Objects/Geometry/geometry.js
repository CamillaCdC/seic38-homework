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
// ```javascript
const rectangleA = {
  name: "A",
  length: 4,
  width: 4
};

const isSquare = function(rectangle){
  const square = rectangle.length === rectangle.width;
  if (square) {
  console.log(`Rectangle${rectangle.name} is a square`);
} else {
  console.log()
};
};
isSquare(rectangleA)

const areaRec = function(rectangle) {
  const areaR = rectangle.length * rectangle.width;
  console.log(`Area of rectangle${rectangle.name} is ${areaR}`);
};
areaRec(rectangleA);

const perRec = function(rectangle) {
  const perimetre = (rectangle.length * 2) + (rectangle.width * 2);
  console.log(`Perimetre of rectangle${rectangle.name} is ${perimetre}`);
};
perRec(rectangleA);




// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
// Triangle
const triangleA = {
  name: "A",
  sideA: 3,
  sideB: 4,
  sideC: 5
};

// isEquilateral
let isEquilateral = function(triangle) {
  const equilateral = triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
  if (equilateral) {
    console.log(`Triangle${triangleA.name} is an equilateral triangle.`);
  } else {
    console.log(`Triangle${triangleA.name} is not an equilateral triangle.`)
  };
};
isEquilateral(triangleA);

//isIsosceles
const isIsosceles = function(triangle) {
  const isosceles = triangle.sideA === triangle.sideB || triangleA.sideA === triangle.sideC || triangle.sideB === triangle.sideC;
  const equilateral = triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
  if (isosceles && !equilateral) {
    console.log(`Triangle${triangleA.name} is an isoceles triangle.`);
  } else {
    console.log(`Triangle${triangleA.name} is not an isoceles triangle.`);
  };
};
isIsosceles(triangleA)

// Area of triangle
const areaTri = function(triangle) {
  const perimetre = triangle.sideA + triangle.sideB + triangle.sideC
  let p = perimetre / 2
  const areaT = Math.sqrt((p * (p - triangle.sideA)) * (p - triangle.sideB) * (p - triangle.sideC))
  console.log(`Triangle${triangleA.name}'s area is ${areaT}`)
}
areaTri(triangleA)

// isObtuse
const isObtuse = function(triangle) {
 const a = (triangle.sideA * triangle.sideA);
 const b = (triangle.sideB * triangle.sideB);
 const c = (triangle.sideC * triangle.sideC);
 const obtuse = (c) > (a + b);
  if (obtuse) {
    console.log(`Triangle${triangleA.name} is obtuse`);
 }  else {
    console.log(`Triangle${triangleA.name} is not obtuse`);
 };
};
isObtuse(triangleA)
