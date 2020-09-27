// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below,
// write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
   length: 4,
   width: 4
 };

console.log("\nFirst One\n");
console.log("\nPart One - Rectangle\n");

function isSquare(obj){
  if (obj.length===obj.width){
    return true;
  }else{
    return false;
  }
};

//console.log(isSquare(rectangleA));

function areaR(obj){
  return obj.length*obj.width;
};

//console.log(area(rectangleA));

function perimeterR(obj){
  return 2*(obj.length+obj.width);
};

//console.log(perimeter(rectangleA))

function rectangleLab(obj){

  obj.area = areaR(obj);
  obj.perimeter = perimeterR(obj);
  obj.isSquare = isSquare(obj);
  return obj;
}

console.log(rectangleLab(rectangleA));

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

console.log("\nFirst One\n");
console.log("\nPart Two - Triangle\n");

const triangleA = {
  sideA: 5,
  sideB: 4,
  sideC: 8
};

function isTriangle(obj){
  let s1 = obj.sideA+obj.sideB > obj.sideC;
  let s2 = obj.sideA+obj.sideC > obj.sideB;
  let s3 = obj.sideC+obj.sideB > obj.sideA;
  if ((s1) && (s2) && (s3)){
    return true;
  }else{
    return false;
  }
}

//console.log(isTriangle(triangleA));

function isEquilateral(obj){
  if (isTriangle(obj)) {
    if ((obj.sideA === obj.sideB) && (obj.sideB === obj.sideC)){
      return true;
    }else{
      return false;
    }
  }else{
    return "This is not a triangle."
  }

}

// console.log(isEquilateral(triangleA));

function isIsosceles(obj){
  if (isTriangle(obj)) {
    if (isEquilateral(obj)=== false){
      if ((obj.sideA === obj.sideB)||(obj.sideB === obj.sideC) || (obj.sideA === obj.sideC)){
        return true;
      }else{
        return false;
      }
    }else{
      return "This is an equilateral triangle";
    }
  }else{
    return "This is not a triangle."
  }

}

//console.log(isIsosceles(triangleA));


function areaT(obj){
  if (isTriangle(obj)) {
    let p = (obj.sideA+obj.sideB+obj.sideC)/2;
    let area = Math.sqrt(p*(p-obj.sideA)*(p-obj.sideB)*(p-obj.sideC));
    return area;
  }else{
    return "This is not a triangle."
  }

}

///console.log(areaT(triangleA));

function isObtuse(obj){
  if (isTriangle(obj)){
    let condition1 = obj.sideA**2+obj.sideB**2 < obj.sideC**2;
    let condition2 = obj.sideA**2+obj.sideC**2 < obj.sideB**2;
    let condition3 = obj.sideC**2+obj.sideB**2 < obj.sideA**2;

    if ((condition1) || (condition2) || (condition3)){
      return true;
    }else{
      return false;
    }
  }else{
    return "This is not a triangle."
  }

}


///console.log(isObtuse(triangleA));

function triangleLab(obj){
  obj.isTriangle = isTriangle(obj);
  obj.isEquilateral = isEquilateral(obj);
  obj.isIsosceles = isIsosceles(obj);
  obj.isObtuse = isObtuse(obj);
  obj.area = areaT(obj);

  return obj;
}

//console.log(triangleLab(triangleA));
