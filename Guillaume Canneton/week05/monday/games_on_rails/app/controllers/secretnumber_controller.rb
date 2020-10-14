class SecretnumberController < ApplicationController

  def home
    render :home
  end

  def play
    @secretnumber = rand(1..10)
    if params[:number].to_i != @secretnumber
      render :lose
    else
      render :win
    end
  end

end
