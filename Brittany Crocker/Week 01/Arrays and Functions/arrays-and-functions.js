// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// maxOfTwoNumbers
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2){
    return num1;
  } else if (num2 > num1) {
    return num2;
  }
};
console.log("maxOfTwoNumbers " + maxOfTwoNumbers(12, 20));

// maxOfThreeNumbers
const maxOfThreeNumbers = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3){
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2){
    return num3;
  }
};
console.log("maxOfThreeNumbers " + maxOfThreeNumbers(12,200,45));

// isVowel
const isVowel = function(string) {
  if (string.includes("a","e","i","o","u")){
    return true;
  } else {
    return false;
  }
}
console.log("isVowel " + isVowel("a"));
console.log("isVowel " + isVowel("b"));


//sumArray
let total = 0
const sumArray = function(arr) {
  for(i = 0; i < arr.length; i++){
  total += arr[i];
  console.log(`sumArray = ${total}`)
};
};
sumArray([1,2,3,4]);


//multiplyArray
let sum = 1
const multiplyArray = function(arr) {
  for(i = 0; i < arr.length; i++){
  sum *= arr[i]
  console.log(`multiplyArray = ${sum}`)
  }
};
multiplyArray([1,2,3,4]);

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string){
  splitString = string.split("");
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join("");
  console.log(joinArray);
}
reverseString("hello there");


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(stringArray){
  let longestWord =[0];
  for (i=0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWord.length) {
      longestWord.length = stringArray[i].length;
      console.log(stringArray[i].length);
    } else {
      console.log("doh!");
    }
}
}
findLongestWord(["golden", "pik", "fountain"]);


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function(words, num){
  for (i=0; i < words.length; i++){
    if (words[i].length > num) {
      console.log(words[i]);
    }
  }
};
filterLongWords(["hi", "there", "champion"], 2);


// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//

let word = "hip"
word.split()
let guessedLetters = []
answer = []

const guessLetter = function(guessedLetter){
  for (i = 0; i <= word.length; i++){
    if (answer.length === word.length ) {   // not working for some reason
      console.log("Congratulations you finished the game.");
      break;
    }
    else if (word.includes(guessedLetter)) {
      let place = word.indexOf(guessedLetter);
        answer[place] = guessedLetter;
          console.log(`Congratulations your guess is correct! Answer = ${answer} `)
      break;
    }
    else {
      guessedLetters.push(guessedLetter);
        console.log(`Guessed Letters = ${guessedLetters}`);
        console.log("Try again!");
      break;
    }
  }
}

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
