// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function ( rectangle ) {
  const width = rectangle.width;
  const length = rectangle.length;
    if ( width === length ) {
    return true;
  } else {
    return false;
      }
    }

const area = function ( rectangle ) {
  const width = rectangle.width;
  const length = rectangle.length;
    if ( width * length ) {
    return true;
  } else {
    return false;
      }
    }

const perimeter = function ( rectangle ) {
  const width = rectangle.width
  const length = rectangle.length
    if ( width * 2 + length * 2 ) {
    return true;
  } else {
    return false;
      }
    }

console.log( isSquare( rectangleA ) ); // "true"
console.log( area( rectangleA ) ); // "area is not defined"// **FIXED : split functions to seperate syntax**
console.log( perimeter( rectangleA ) ); // "perimeter is not defined"
// **FIXED : split functions to seperate syntax**

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// RESEARCH : Math.pow()
// Obtuse triangle : a2 > b2 + c2
// Equilateral triangle : a2 === b2 + c2
// Isosceles triangle : ab === ac is true but ab + bc && ac + cb is false

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
}

const isEquilateral = function ( triangle ) {
  if ( Math.pow( triangle.sideA, 2 ) === Math.pow( triangle.sideB, 2 )  + Math.pow( triangle.sideC, 2 ) ) {
    return true;
  } else {
    return false;
  }
}
const isIsosceles = function ( triangle ) {
  if ( Math.pow( triangle.sideA, 2 ) > Math.pow( triangle.sideB, 2 ) + Math.pow( triangle.sideC, 2 ) ) {
    return true;
  } else {
    return false;
  }
}

const isObtuse = function ( triangle ) {
  if ( Math.pow( triangle.sideA, 2 ) < Math.pow( triangle.sideB, 2 ) + Math.pow( triangle.sideC, 2 ) ) {
    return true;
  } else {
    return false;
  }
}

console.log( isEquilateral( triangleA ) );
console.log( isIsosceles( triangleA ) );
console.log( isObtuse( triangleA ) );
