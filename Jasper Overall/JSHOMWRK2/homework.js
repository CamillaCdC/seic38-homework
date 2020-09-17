    //
    // Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxTwo =  function (firstnum, secondNum){
  if (firstNum + " is Larger than " + secondNum);
} else {
  console.log(firstNum + " is less than " + secondNum);
}
return;
}

//Setting the NUMBERSSSSS
max(20,678);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxthree = function (firstnum, secondNum, thirdNum){
if (firstNum + " is Larger than " + secondNum + " & " + thirdNum);
} else {
console.log(firstNum + " is less than " + secondNum + " & " + thirdNum);
}
return;
}

//Setting the NUMBERSSSSS
max(20, 678, 8888);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (argument){

  var text;
  var argument = argument.toLowerCase();

  var vowels = ([' a ', ' e ', ' i ', ' o ', ' u ']);

  for (var i = 0; i <= vowels.length; i++){
    if (argument != vowels[i]) {
      continue;
    }
    return true;

  }
  return false;
}
// see if "A" is a vowel
var char = "A";

if (isVowel(char)) {
  console.log(char + "is a vowel");
} else{
  console.log(char + "is not a vowel");
}


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and
//multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (numbers) {
  var total = 0;
  for (var i =0; i < numbers.length; i++)
    total += numbers[i];
  }
return;

// to Da console
console.log(sum([1,2,3,4]));

//Multiplcation
const multiplyArray = function (numbers) {
  var total = 1;
  for (var i = 0; i < numbers.length; i++) {
    total = (total * numbers[i]));;
  }
// Back to Da console.... part three ==>
console.log(multiply([1,2,3,4]));
