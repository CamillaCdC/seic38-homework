class RockController < ApplicationController
  def enter
  end

  def play
    choices = ["scissors", "paper", "rock"]
    @choice = choices.sample
    # @choice = "paper"

    if params[:item] == @choice
      render :tie

    elsif params[:item] == "scissors"
      if @choice == "paper"
        render :win
      elsif
        @choice == "rock"
        render :lose
      end

    elsif params[:item] == "paper"
      if @choice == "rock"
        render :win
      elsif
        @choice == "scissors"
        render :lose
      end

    elsif
      params[:item] == "rock"
      if @choice == "scissors"
        render :win
      elsif
        @choice == "paper"
        render :lose
      end
    end
  end
end
