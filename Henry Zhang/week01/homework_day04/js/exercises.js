
console.log(`It is a wonderful day`);
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
    length: 4,
    width: 4
};

const rectangleB = {
    length: 6,
    width: 5
};

//functions
const isSquare = function (rec) {
    const value = Object.values(rec);

    for (var i = 0; i < value.length; i++) {
        if (value[i] === value[i+1]) {
            return true;
        }
        return false;
    }
}

console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));

const area = function (rec) {
    const value = Object.values(rec);
    if( value.length === 2){
        for (var i = 0; i < value.length; i++) {
            return value[i] * value[i+1];
        }
    }
 }


console.log(area(rectangleA));
console.log(area(rectangleB));

const perimeter = function (rec) {
    const value = Object.values(rec);

    if( value.length === 2){
        return (value[0] + value[1]) *  2;
     }
}

console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));

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
    a: 3,
    b: 3,
    c: 3
};

const isEquilateral = function (tri) {
    const value = Object.values(tri);

    for (var i = 0; i <value.length; i++) {
       if (value[i] === value[i+1] && value[i] === value[i+2]) {
           return true;
       }
        return false;
    }
}

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));

const isIsosceles = function (tri) {
    const value = Object.values(tri);

    if (isEquilateral(tri) === false){
        for (var i = 0; i <value.length; i++) {
            if (value[i] === value[i+1] ||
                value[i] === value[i+2] ||
                value[i+2] === value[i+2]) {
                    return true;
                }
                return false;
        }
    }
     return false;    //  end if
}

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));

const triArea = function (tri) {
    const value = Object.values(tri);

    if (value.length === 3) {
        const p = (value[0] + value[1] + value[2]) / 2;
        return Math.sqrt( p * (p - value[0]) * (p - value[1]) * (p - value[2]));
    }
}

console.log(triArea(triangleA));
console.log(triArea(triangleB));

const isObtuse = function (tri) {
     const value = Object.values(tri);

     if (value.length === 3) {
         if ( Math.pow(value[0]) + Math.pow(value[1]) < Math.pow(value[2]) ||
              Math.pow(value[1]) + Math.pow(value[2]) < Math.pow(value[0]) ||
              Math.pow(value[0]) + Math.pow(value[2]) < Math.pow(value[1]) ){
                return true;
            }
     }
     return false;
}

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
