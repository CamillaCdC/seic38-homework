// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

let wordArray = ["F", "O", "X"];

let guessArray = [" ", " ", " ", "F", "O", "X"];

let trueGuessing = "";
let reward = 0;
let guessed = 0;

const guessLetter = function (guessArray) {
  for (let i = 0; i < wordArray.length; i++){
    for (let j = 0; j < guessArray.length; j++){
      if (guessArray[j] === wordArray[i]){
        reward = reward + 10;
        trueGuessing = trueGuessing + guessArray[j];
        console.log(`Congratulations you found the letter ${guessArray[j]}, your reward is ${reward} dollars`);
        return reward
        if (trueGuessing.length === 2){
        reward = reward * 2

        }
        if (trueGuessing.length === 3){
        reward = reward * 3

        }
   } else {
        reward = reward - 1;

        }
    }
  }
    if (trueGuessing.length === 3){
    return `You have guessed ${trueGuessing} correctly! YOU WIN!! You have won ${reward} dollars`;
  }
};

//console.log(`${guessLetter(guessArray)}`);
console.log(`${guessLetter(" ")}`);
console.log(`${guessLetter("F")}`);
console.log(`${guessLetter("M")}`);
console.log(`${guessLetter("O")}`);
console.log(`${guessLetter("P")}`);
console.log(`${guessLetter("R")}`);
console.log(`${guessLetter("Q")}`);
console.log(`${guessLetter("X")}`);


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
//
let wordArray2 = ["F", "O", "X"];

let trueGuessing2 = "";
let reward2 = 0;
let wrongletters = 0;


const guessLetter2 = function (guess) {
  for (let i = 0; i < wordArray2.length; i++) {
    if (guess.length === 1){
      if (guess === wordArray[i]){
          reward2 = reward2 + 20;
          trueGuessing2 = trueGuessing2 + guess;
          console.log(`Congratulations you found the letter ${guess} reward ${reward2}`);
          if (trueGuessing2.length === 2){
            reward2 = reward2 * 2
          }
          if (trueGuessing2.length === 3) {
            reward2 = reward2 * 3
          }
      } else {
        reward2 = (reward2 - 1);
      }
      }
    else {
      console.log(`You have entered too many characters`);
    }

    }
    if (trueGuessing2.length === 3) {
    return `You have guessed ${trueGuessing2} correctly! YOU WIN!! You have won ${reward2} dollars `;
  }

  };


//console.log(`${guessLetter(guessArray)}`);
console.log(`${guessLetter2(" ")}`);
console.log(`${guessLetter2("F")}`);
console.log(`${guessLetter2("Moo")}`);
console.log(`${guessLetter2("O")}`);
console.log(`${guessLetter2("P")}`);
console.log(`${guessLetter2("R")}`);
console.log(`${guessLetter2("Q")}`);
console.log(`${guessLetter2("X")}`);
