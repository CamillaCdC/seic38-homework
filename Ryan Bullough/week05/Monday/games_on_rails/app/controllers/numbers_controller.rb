class NumbersController < ApplicationController
  def decide
  end

  def result
    @random = rand(1..10)
    if params[:number].to_i == @random
      render :win
    else
      render :lose
    end
  end
end
