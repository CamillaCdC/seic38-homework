// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const targetWord = ["r", "e", "d"];
const guessedLetters = ['_','_','_'];
let newLetter;
let numRight = targetWord.length;
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function(guess) {
  for (i = 0; i < targetWord.length; i++) {
    if (guess === targetWord[i]) {
      guessedLetters[i] = guess; //add correct guess to guessedLetters
      newLetter = true // remember to congratulate the player!
      numRight -- //1 less left to guess
      targetWord.splice(i, 1, "_") // replace letter in targetWord with an underscore so you can't put the same letter in twice. I guess you could cheat by putting in underscores though...
      break
    } else {
      newLetter = false
    }
  }
  if (newLetter === true && numRight > 0 ) {
    console.log(`${guessedLetters} Well done, ${numRight} left!`);
  } else if (newLetter === false && numRight > 0 ) {
    console.log(`${guessedLetters}, ${numRight} to go`);
  } else {
    console.log(`${guessedLetters}, congratulations! You win!`)
  }
};
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

let wallet = 0;
let prize = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //generate random number between min and max
}

const guessLetterFortune = function(guess) {
  for (i = 0; i < targetWord.length; i++) {
    if (guess === targetWord[i]) {
      guessedLetters[i] = guess; //add correct guess to guessedLetters
      newLetter = true // remember to congratulate the player!
      numRight -- //1 less left to guess
      targetWord.splice(i, 1, "_") // replace letter in targetWord with an underscore so you can't put the same letter in twice. I guess you could cheat by putting in underscores though...
      break
    } else {
      newLetter = false
    }
  }
  if (newLetter === true && numRight > 0 ) {
    wallet = wallet + prize(10, 100);
    console.log(`${guessedLetters} Well done, you have $${wallet} and ${numRight} numbers left!`);
  } else if (newLetter === false && numRight > 0 ) {
    wallet = wallet - prize(10, 100);
    console.log(`${guessedLetters}, Uh oh, $${wallet} and ${numRight} letters to go`);
  } else if (wallet > 0) {
    console.log(`${guessedLetters}, congratulations! You win! You made $${wallet}.`)
  } else {
    console.log(`${guessedLetters}, You got it! Unfortunately, you have $${wallet}.`)
  }
};
//NOTE: The way I have this set, you can't get multiple letters at once, so no multiplicative cash bonuses are possible.
