// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function ( x, y ) {
      if ( x > y ) {
      return x;
    } else {
      return y;
    }
  }

console.log( maxOfTwoNumbers(23, 87) );
console.log( maxOfTwoNumbers(89, 65) );
console.log( maxOfTwoNumbers(8, 5) );

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
//
// RESEARCH : Spread operator, sort method, array.pop
// RESEARCH : maxOfThree.sort();
// MISTAKES REPEATED : differenciate || and &&.

const maxOfThree = function ( x, y, z ) {
    if ( x > y && x > z ) {
      return x;
  } else if ( y > x && y > z ) {
      return y;
  } else {
      return z
    }
  }

console.log( maxOfThree( 5, 8, 18 ) );
console.log( maxOfThree( 98, 2, 13 ) );
console.log( maxOfThree( 63, 48, 33 ) );
console.log( maxOfThree( 124, 346, 235 ) );
console.log( maxOfThree( 1, 4, 12 ) );

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//
// RESEARCH : logical or operators. Create array of vowels. Run .includes in array.

const vowels = function ( character ) {
  if ( character === 'a' ) {
    return true;
  } else if ( character === 'e' ) {
    return true;
  } else if ( character === 'i') {
    return true;
  } else if ( character === 'o' ) {
    return true;
  } else if ( character === 'u' ) {
    return true;
  } else {
    return false;
  }
}

console.log( vowels('a') );
console.log( vowels('b') );
console.log( vowels('c') );
console.log( vowels('d') );
console.log( vowels('e') );
console.log( vowels('i') );

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//
// RESEARCH : Reduce method.

const sumArray = function ( sum ) {
  const reducer = ( accumulator, currentValue ) => accumulator + currentValue;
  return sum.reduce( reducer );
}

console.log( `The sum of the array number is ${ sumArray( [1, 2, 3, 4] ) }.` );
console.log( `The sum of the array number is ${ sumArray( [6, 3, 1, 8] ) }.` );
console.log( `The sum of the array number is ${ sumArray( [1, 63, 75, 8] ) }.` );

const multiplyArray = function ( multiply ) {
  const reducer = ( accumulator, currentValue ) => accumulator * currentValue;
  return multiply.reduce( reducer );
}

console.log( `The multiplied array number is ${ multiplyArray( [1, 2, 3, 4] ) }.` );
console.log( `The multiplied array number is ${ multiplyArray( [6, 3, 1, 8] ) }.` );
console.log( `The multiplied array number is ${ multiplyArray( [1, 63, 75, 8] ) }.` );

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//
// RESEARCH : .split(''), .reverse(), .join('')

const reverseString = function ( string ) {
  const str = string.split('').reverse().join(''); {
    return string.split('').reverse().join('');
  }
}

console.log( `The reverse word is : ${ reverseString('jag testar') }.` );
console.log( `The reverse word is : ${ reverseString('chorizo sticks') }.` );
console.log( `The reverse word is : ${ reverseString('eclipse') }.` );

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// RESEARCH : .split(''), array, .join(''), .sort('').

// const findLongestWord = function (word, word, word) {
//   for ( let i = 0; i > )
// }
//
// console.log('The longest word is : ${ findLongestWord [i] }')

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
