# making a random number out of the class
# @@number_rand = rand 500


class GuessController < ApplicationController

  def max
  end


  # this will take the params[:max] and make a random number-
  # and then will render to result
  def form
      @max = params[:max]
      @@numbers = rand params[:max].to_i
      render :result
  end


  # it is going to guide the player for the next number
  def result
    user_number = params[:number1].to_i
    number = @@numbers
    if number < user_number
      @result = "Make it less"
    elsif number>user_number
      @result = "Make it more"
    else
      @result = "Yes, The secret number is #{number}"
      # if the player could guess the secret number, this will gonna change-
      # the number as player can play again
      # @@number_rand = rand 500
      @@numbers = rand params[:max]
    end
  end
end
