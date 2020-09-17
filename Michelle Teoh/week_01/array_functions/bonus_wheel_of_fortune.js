// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// GAME SETTING
const answer = 'FOX';
var wordCompletion = (answer.toUpperCase());


var guess = function(userGuess) {
  var wordGuesses = ('_' * answer.length);
  var guessed = False;
  var guessLetter = ''
  var guessWord = ''
  var guessTried = 6 ;
  while ! guessed && (gusssTried >= 0); {
    return "Please guess a letter or word: ".toUpperCase(); {
      if (userGuess.length === 1) && (guess === true);
      if var guess = guessLetter; {
        return "You already guessed the letter", guess;
      } else if guess != answer; {
        guessTried -= 1
        return guess, " is not in the word!"
        guessLetter.append(guess);
      } else {
        return "Great", guess, "is in the word!";
        guessLetter.append(guess);
        var wordList = wordCompletion;
        var indices = for (var i = 0; i < answer.length; i++) if guessLetter = answer[i]; {
        } for (var index in indices) {
          wordList = guess;
      } wordCompletion = "".join(wordList);
      if "_" !== wordCompletion; {
        guessed === True;
      } else if (guess.length === answer.length) && (guess === true); {
        if (guess === guessWord);
        return "You already guessed the letter", guess
      } else if (guess.length === answer.length) && (guess === true); {
        if (guess === guessWord);
        return "You already guessed the letter", guess;
      } else if (guess != answer); {
        guessTried -= 1
        return guess, "is not the letter"
        guessWord.append(guess)
      } else; {
        guessed = true;
        wordCompletion = answer;
    }else;{
      return 'Not a valid letter. Try again.'
    return wordCompletion
    return /\n/
  }if guessed; {
    return "Congrats, you guesses the word! You win!"
  }else; {
    return ("Sorry, you ran out of tries. The word was " answer "Maybe try next time!")
  }
};
