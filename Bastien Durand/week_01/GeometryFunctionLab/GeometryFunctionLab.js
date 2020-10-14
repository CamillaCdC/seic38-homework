// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:


const rectangle = {
  length: 4,
  width: 4
};

// * isSquare - Returns whether the rectangle is a square or not

const isSquare = function (arg) {

  if ( arg.length === arg.width) {
    return console.log(`Is a square`)
  } else {
    return console.log(`Not a square`)
  }
}

isSquare(rectangle)

// * area - Returns the area of the rectangle

const isArea = function (arg) {
  const areaOfArg = arg.length * arg.width
  return areaOfArg
  }

console.log(isArea(rectangle));

// * perimeter - Returns the perimeter of the rectangle

const isPerimeter = function (arg) {
  const perimterOfArg = ((arg.length * 2) + (arg.width * 2))
  return perimterOfArg
  }


console.log(isPerimeter(rectangle))


// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:


// * isEquilateral - Returns whether the triangle is equilateral or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const checkEquilateral = (triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC)

const isEquilateral = function (arg) {

  if (checkEquilateral) {
    console.log('Is equilateral')
  } else {
    console.log('Is not equilateral')
  }
}

isEquilateral(triangleA);

// * isIsosceles - Returns whether the triangle is isosceles or not

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };


const checkIsosceles = (triangleA.sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideA === triangleA.sideC )

const isIsosceles = function (arg) {
  if (checkIsosceles && !checkEquilateral ) {
    console.log('Is Isosceles')
  } else {
    console.log('Is not Isosceles')
  }
}

isIsosceles(triangleA)


// * area - Returns the area of the Triangle

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const checkArea = function (arg) {
  const sides = (arg.sideA + arg.sideB + arg.sideC) /2;
  const areaOfTriangle = Math.sqrt(sides * ((sides-arg.sideA)*(sides-arg.sideB)*(sides-arg.sideC)))
  return areaOfTriangle
}

console.log(checkArea(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not

// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const isObtuse = function (arg) {

  if (((arg.sideA * arg.sideA) + (arg.sideB * arg.sideB)) < (arg.sideC * arg.sideC))
  {
  console.log('Is obtuse')
  } else {
  console.log('Is not obtuse')
  }
}

isObtuse(triangleA)
