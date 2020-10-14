//question 1

const maxOfTwoNumbers = function ( n1, n2) {
if (n1 > n2 ) {
  return n1 }
else ( n2 )
  return n2
}
console.log(maxOfTwoNumbers(45,60));


//question 2
const maxOfThree = function ( n1, n2, n3) {
let max1;
if (n1 > n2) {
  max1 = n1;
} else {
   max1 = n2
}

if (max1 > n3) {
return max1
 }else  {
return n3
}
};

console.log(maxOfThree(45,1,73));

//question 3
const isVowel = function (justin) {
 if (justin.length == 1) {
    var vowels = ["a", "e", "i", "o", "u"];
    var isVowel = false;

    for (e in vowels) {
      if (vowels[e] == justin) {
        isVowel = true;
      }
    }
  return isVowel
} else {
  return false;
}
}
console.log(isVowel("i"));

//question 4
//
// const sumArray = function (i) {
//   for ( let i = 0; 1 <= 10; 1++)}
// const  multiplyArray = function (j){
//     for (let j = 0; j = 24; 1++) {
//   }
// }
// console.log(sumArray,multiplyArray);

//question 5
const reverseString = function (s){
  return s.split("").reverse().join("")
}
console.log(reverseString("hello world"));



//question 6

const findLongestword = function (big) {
  let longestWord = big.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
}
console.log(findLongestword("boy do i love Javascript"));
//
//
// //question 7
//
// const filterLongestword = function (word)
