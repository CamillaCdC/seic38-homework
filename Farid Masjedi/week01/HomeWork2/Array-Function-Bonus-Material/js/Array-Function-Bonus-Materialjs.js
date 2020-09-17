// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, -
// - or do some googling to figure this out.

//First Way
console.log("\nFirst one\n");

function maxOfTwoNumbers(num1,num2){
  if (num1>num2){
    console.log(`${num1} is the maximum of ${num1} and ${num2}.`);
    return num1;
  }else if (num1<num2){
    console.log(`${num2} is the maximum of ${num1} and ${num2}.`);
    return num2;
  }else{
    cosole.log('They are equal.');
    return 'There is no maximum between two equal numbers.';
  }
}
maxOfTwoNumbers(3,5);
maxOfTwoNumbers(30,5);
maxOfTwoNumbers(-30,5);
maxOfTwoNumbers(3,-50);

//Second Way
// function myMaxFirstWay(num1,num2){
//   let max = num1;
//   if (num2>max){
//     max = num2;
//   }
//   console.log(`The maximum is ${max}`);
//   return max;
// }


// myMaxFirstWay(3,5);
// myMaxFirstWay(30,5);
// myMaxFirstWay(-30,5);
// myMaxFirstWay(3,-50);

//Third myMaxSecondWay
function myMaxSecondWay(num1,num2){
  return ((num1+num2)+Math.abs(num1-num2))/2;
}

// console.log(myMaxSecondWay(3,5));
// console.log(myMaxSecondWay(-2,5));
// console.log(myMaxSecondWay(20,-30));
// console.log(myMaxSecondWay(-30,50));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
console.log("\nSecond one\n");
//First Way
function maxOfThree(num1,num2,num3){
  let max = num1;
  let a = [num2,num3];
  for (i=0; i<2; i++){
    if (max<a[i]){
      max= a[i];
    }
  }
  console.log(`Maximum number between ${num1},${num2},${num3} is ${max}`);
  return max;
}
console.log(maxOfThree(12,10,14));
console.log(maxOfThree(-12,10,4));
console.log(maxOfThree(12,-10,4));
console.log(maxOfThree(12,15,-14));

//Second Way
// function maxOfThreeSecond(num1,num2,num3){
//   let max = num1;
//   if ((num2>max)&&(num3>num2)) {
//       max = num3;
//   }else if (num2>max){
//     max = num2;
//   }else if (num3>max){
//     max = num3;
//   }
//   return max;
// }
// console.log(maxOfThreeSecond(12,10,14));
// console.log(maxOfThreeSecond(-12,10,4));
// console.log(maxOfThreeSecond(12,-10,4));
// console.log(maxOfThreeSecond(12,15,-14));

//Third Way
// function maxOfThreeMyWay(num1,num2,num3){
//   let max = myMaxSecondWay(num1,num2);
//   max = myMaxSecondWay(num3,max);
//   return max
// }
// console.log(maxOfThreeMyWay(12,10,14));
// console.log(maxOfThreeMyWay(-12,10,4));
// console.log(maxOfThreeMyWay(12,-10,4));
// console.log(maxOfThreeMyWay(12,15,-14));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel
// ,false otherwise.
console.log("\nThird one\n");

function isVowel(str){
  let vowelArray = ['a','e','i','o','u'];
  let result = false;
  for (i=0; i<vowelArray.length; i++){
    if (str === vowelArray[i]){
      result = true;
      break;
    }
  }
  if (result===true){
    console.log(`${str} is a vowel letter.`);
  }else{
    console.log(`${str} is not a vowel letter.`);
  }
  return result;
}
console.log(isVowel('a'));
console.log(isVowel('f'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all-
//- the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, -
//- and multiplyArray([1,2,3,4]) should return 24.
console.log("\nForth one\n");

function sumArray(myArray){
  let s=0;
  for (i=0; i<myArray.length; i++){
    s = s+myArray[i];
  }
  console.log(`The sum of Elements of [${myArray}] is ${s}`);
  return s;
}
console.log(sumArray([1,2,3,4]));
console.log(sumArray([-10,10]));
//console.log(sumArray([10,-20]));
console.log(sumArray([0.1,0.2]));
console.log('Javascript can not give the right sum of 0.1 and 0.2 :))');



// Bonus
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".


console.log("\nFifth one\n");

function reverseString(str){
  let result = '';
  for (i=str.length-1; i>=0; i--){
    result = result+str[i];
  }
  console.log(`The reverse of ${str} is ${result}`)
  return result;
}
console.log(reverseString("jag testar"));
console.log(reverseString("ratset gaj"));
console.log(reverseString("f f F f f"));
console.log(reverseString("farid"));
console.log(reverseString("12345"));


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
console.log("\nSixth one\n");

function findLongestWord(strArray){
  let strLenMaxIndex = 0;
  let max = -1;
  for (i=0; i<strArray.length; i++){
    let len = 0;
    for (j=0; j<strArray[i].length; j++){
      len = len+1;
    }
    if (max<len) {
      max = len;
      strLenMaxIndex = i;
    }
  }
  result = `The Longest on is '${strArray[strLenMaxIndex]}' with ${max} length`
  return result;
}
console.log(findLongestWord(['a','ac','a c d']));
console.log(findLongestWord(['aaa','aa','a']));
console.log(findLongestWord(['aa','aaa','a']));
console.log(findLongestWord(['a','sa','a']));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of -
// - words that are longer than i.

console.log("\nSeventh one\n");

function filterLongWords(wordArray,num){
  let result=[];
  for (i=0; i<wordArray.length; i++){
    if(wordArray[i].length>num){
      result.push(wordArray[i]);
    }
  }
  console.log(`The array that contain all the elements of [${wordArray}] -`);
  console.log(`- that have length more than ${num} is [${result}]\n`);
  return result;
}
console.log(filterLongWords(['a','ac','a c d','ssss'],num = 3));
console.log(filterLongWords(['aaa','aa','a'],num=2));
console.log(filterLongWords(['aa','aaa','a'],num=1));
console.log(filterLongWords(['a','sa','a'],num=2));
