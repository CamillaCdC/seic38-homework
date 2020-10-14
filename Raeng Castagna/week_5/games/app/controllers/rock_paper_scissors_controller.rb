class RockPaperScissorsController < ApplicationController
  def form
  end

  def play
    @guess = params[:guess].downcase
    # array of words and ai selecting one at random.
    words = ['rock', 'paper', 'scissors']
    @ai = words[rand(words.size)]
    # **** how to put this on the dom????????
    if @ai == @guess
      "Player wins!"
    else
      "Computer wins!"
    end
  end
end


# hint from Joel
# def blackjack
#   if params[:cards].present?
#     play_round(params[:cards])
#     render :turn
#   else
#     render :intro
#   end
# end
