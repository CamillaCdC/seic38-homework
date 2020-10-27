class SecretController < ApplicationController

  def input

    render :secretnumber
  end

  def result
@answer = rand(1..10)
@guessed = params[:guessednumber].to_i
if @guessed === @answer
  render :win
  else
    render :lose
  end
end
end
