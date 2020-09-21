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
      length: 4,
      width: 4
    };

      const isSquare = function ( rectangle ) {

      if ( rectangle.length === rectangle.width ){
        return `This is a square`;
    } else {

        return `This is a rectangle`;
    }
    };

      const areaRectangle = function ( rectangle ) {
        let area = rectangle.length * rectangle.width;
        return area;
    } ;

      const perimeter = function ( rectangle ) {
        let perimeter = 2 * (rectangle.length + rectangle.width);
        return perimeter;
    } ;


    console.log(`${isSquare(rectangleA)}`);
    console.log(`${areaRectangle(rectangleA)}`);
    console.log(`${perimeter(rectangleA)}`);

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

    const isEquilateral = function ( triangle ) {
      if ( triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC ) {
        return `This is equilateral`;
    } else {

        return `This is not equilateral`;
    }
    };

      const isIsosceles = function ( triangle ) {
        const a = triangle.sideA;
        const b = triangle.sideB;
        const c = triangle.sideC;

      if ( a === b || b === c || a === c){
        return `This is isosceles`;
    } else {

        return `This is not isosceles`;
    }
    };

      const areaTriangle = function ( triangle ) {
        const a = triangle.sideA;
        const b = triangle.sideB;
        const c = triangle.sideC;

        const p = ( a + b + c ) / 2 ;
        let area = Math.sqrt(p * ( p - a ) * ( p - b ) * (p - c ));
        return area;
  };

    const isObtuse = function ( triangle ) {
      const aSquared = triangle.sideA * triangle.sideA;
      const bSquared = triangle.sideB * triangle.sideB;
      const cSquared = triangle.sideC * triangle.sideB;

      if ( cSquared === aSquared + bSquared ) {
        return `This triangle is a right triangle. It is not obtuse.`;
      } else if ( cSquared < aSquared + bSquared ) {
        return `This triangle is an acute triangle. It is not obtuse.`;
      } else if ( cSquared > aSquared + bSquared ) {
        return `This triangle is an obtuse triangle`;
      }
    };

    console.log( `${isEquilateral(triangleA)}` );
    console.log( `${isIsosceles(triangleA)}` );
    console.log( `${areaTriangle(triangleA)}` );
    console.log( `${isObtuse(triangleA)}` );

    // # The Cash Register
    //
    // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

    const cartForParty = {
      banana: 1.25,
      handkerchief: 0.99,
      Tshirt: 25.01,
      apple: 0.60,
      nalgene: 10.34,
      proteinShake: 22.36
   };

    const cashRegister = function ( shopping ) {
      const prices = Object.values( shopping );
      let sum = 0;
      for (let i = 0; i < prices.length; i++ ) {
      cost = prices[i];
      sum = sum + cost;
      }
      return sum;
    };

    console.log( `${cashRegister(cartForParty)}` );

//   # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16


// const validateCreditCard = function (num) {
//   const price = num.charAt(10)
//   console.log(price);
//   };
//   console.log(validateCreditCard(`9999-9999-8888-0000`));


    const validateCreditCard = function (num) {
            // let onlyNum = num.replace(/\D/g, '');//remove all non digit characters
            let onlyNum = num.replace(/\-/g, '') // - g means global

            if (onlyNum.length === 16) { //number must have 16 digits
                let sum = 0;
                for (let i =0; i < onlyNum.length; i++) {
                    let digit = onlyNum[i];
                    sum = sum + digit;//this works, need to make digit an actual digit
                    console.log(sum);
                    // if (onlyNum.length - 1 === onlyNum[i] && sum > 16){
                    //   return `valid: true, number: ${onlyNum}`;
                    // } else {
                    //   return `valid: false, number: ${onlyNum}, error: sum less then 16`;
                    // }


                  // if (digit === onlyNum.length - 1 && onlyNum[i] % 2 === 0){
                  //   return `valid: true, number: ${onlyNum}`;
                  // } else {
                  //   return `valid: false, number: ${onlyNum}, error: odd final number`;
                  // }



        //must have at least two different digits(loop?)
      }; //The sum of all the digits must be greater than 16
      }
      else {
        return `valid: false, number: ${onlyNum}, error: wrong_length`;
      }
  };


    //console.log(`${validateCreditCard(array)}`);

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
    console.log(`${validateCreditCard("9999-9999-8888-0000")}`);
    console.log(`${validateCreditCard("6666-6666-6666-1666")}`);
//
// // The following credit card numbers are invalid:
//
    console.log(`${validateCreditCard("a923-3211-9c01-1112")}`);
    console.log(`${validateCreditCard("4444-4444-4444-4444")}`);
    console.log(`${validateCreditCard("1111-1111-1111-1110")}`);
    console.log(`${validateCreditCard("6666-6666-6666-6661")}`);

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
