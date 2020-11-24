# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


# debug_mode = true

print "what is the maximum poss value you'd like to guess? "

MAX_VALUE = gets.to_i

 SECRET_NUMBER = Random.rand 0..MAX_VALUE
 puts "the secret num #{ SECRET_NUMBER }" # if debug_mode

 print "guess the secret num between 0 and #{ MAX_VALUE}: "
 guess = gets.to_i

 until guess == SECRET_NUMBER
  if guess > SECRET_NUMBER
   print "too high try again: "
 else
   print "too low try again: "
 end
 guess = gets.to_i
end

 puts "Congratulations"
