# making a random number out of the class
@@number_rand = rand 500

class GuessController < ApplicationController

  # render :form
  def form
  end

  # it is going to guide the player for the next number
  def result
    user_number = params[:number].to_i
    number=@@number_rand
    if number < user_number
      @result = "Make it less"
    elsif number>user_number
      @result = "Make it more"
    else
      @result = "Yes, The secret number is #{number}"
      # if the player could guess the secret number, this will gonna change-
      # the number as player can play again
      @@number_rand = rand 500
    end
  end
end
