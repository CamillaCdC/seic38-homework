// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess
// the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold
// the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user
// if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should
// congratulate the user for winning the game.

// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that
// your program works.

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter
// (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
//
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
// If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number
// every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they
// lost and show a hangman on the log.

const guessWord = 'Farid';
let guessWordArray =[];
let userLetters = [];
let guessedLetters = [];
let result ='';
let reward = 0;
let hangMan = 0;

for (i=0; i<guessWord.length; i++){
  guessWordArray.push(guessWord[i]);
  userLetters.push('- ');
};

console.log("\nThe Word Guesser Game.\n");
console.log("\nThere is a Function named guessLetter that you");
console.log("can input a letter into it as an argument.\n");
console.log("\nYour rewards/penalty for guessing right/wrong letter is 2$.\n ");
console.log("\nBear in mind: There is a hangman here and if you make wrong");
console.log("guesses more than the length of the secret word, you will be hanged\n");
console.log("\nJust joking! ");
console.log("\nWrite guessLetter( ) and put any letter you want inside it.")

function guessLetter(gLetter,trueGuessCount = 0,userGuess = ''){

  for (k=0; k<guessedLetters.length; k++){
    if (gLetter === guessedLetters[k]){
      return `You have tried this letter before. Try another one.`;
    }
  }
    for (i=0; i<guessWordArray.length; i++){
      if ((gLetter === guessWordArray[i])||(gLetter.toUpperCase()===guessWordArray[i])||(gLetter.toLowerCase()===guessWordArray[i])) {
        userLetters[i]= guessWordArray[i];
        trueGuessCount +=1;
      }
      userGuess = userGuess+userLetters[i];
    }
    if (userGuess === guessWord){
       result = `\nCongratulation, you found the Word that is ${guessWord}.
       \nRefresh the browser`;
       reward = reward + trueGuessCount*2;

    }else if (trueGuessCount>0) {
       result = `\nCongratulation, you have found ${trueGuessCount} letter(s).\n\n`
       result = result + userLetters;
       reward = reward+trueGuessCount*2;
       guessedLetters.push(gLetter,gLetter.toUpperCase());

    }else{
       result = `\nNope. That letter is not in the Secret Word.\n\nTry another letter.\n\n${userLetters}
       \nJust Be aware that you have made wrong try for ${hangMan+1} time(s).`;
       reward = reward - 2;
       guessedLetters.push(gLetter,gLetter.toUpperCase());
       hangMan = hangMan+1;
    }
    if (hangMan === guessWordArray.length){
      console.log(hangMan);
      console.log("\n\nIt was not a joke. You are lost\n");
      console.log( "__________\n"+
       "      |        |\n"+
       "      0        |\n"+
       "     \\|/       |\n"+
       "      |        |\n"+
       "     / \\       |\n"+
       "               |\n"+
       "               |\n"+
       "    ============\n");
       return;
    }

  console.log(result);
  console.log(`\nYour reward is ${reward}`);
};
