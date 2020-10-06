// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const areaOfRectangle = function (x, y) {
  const area = x * y;
  const perimeter = x * 2 + y * 2;
  if (x === y)
return (` This is a square and the area of this square is ${ area }cm2 and it's perimeter is ${ perimeter }cm`);
  if (x !== y)
return (` The area of this rectangle is ${ area }cm2 and it's perimeter is ${ perimeter }cm`)
}
  areaOfRectangle(10, 10)

  //
  // Part 2, Triangle
  // Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
  //
  // isEquilateral - Returns whether the triangle is equilateral or not
  // isIsosceles - Returns whether the triangle is isosceles or not
  // area - Returns the area of the Triangle
  // isObtuse - Returns whether the triangle is obtuse or not

  const triangleTypesArea = function (x, y, z) {
    // const areaEquilateral =
    // const areaIsoscelese =
    // // const areaObtuse = ((y * y))
    if (x === y && y === z)
    return (`This is an Equilateral triangle and its area is `);
    else if ((x * x) > ((y * y) + (z * z)))
    return (`This is an Obtuse triangle and its area is `);
    else if (x < y && y === z)
    return (`This is an Isoscelese triangle and its area is `);
    else
    return (`This has gone beyond 180 degrees its definatly not a triangle`)
  }

  //
  // The Cash Register
  // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
  //
  // // Input
  // const cartForParty = {
  //   banana: "1.25",
  //   handkerchief: ".99",
  //   Tshirt: "25.01",
  //   apple: "0.60",
  //   nalgene: "10.34",
  //   proteinShake: "22.36"
  // };
  //
  // // Output
  // cashRegister(cartForParty)); // 60.55

  const cashRegister = function () {
  const shoppingCart = {
      banana: 1.25,
      handkerchief: .99,
      Tshirt: 25.01,
      apple: 0.60,
      nalgene: 10.34,
      proteinShake: 22.36
  };
  return (shoppingCart.banana + shoppingCart.handkerchief + shoppingCart.Tshirt + shoppingCart.apple + shoppingCart.nalgene + shoppingCart.proteinShake);
};
