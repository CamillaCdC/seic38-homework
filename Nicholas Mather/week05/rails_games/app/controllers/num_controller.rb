class NumController < ApplicationController
  def keypad
  end

  def guess
    @num = rand(1..9)
    if params[:x].to_i == @num
      render :guess_win
    else
      render :guess_lose
    end
  end
end
