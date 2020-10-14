class RpsController < ApplicationController
  def play
    @player_choice = params[:choice]
    @computer_choice = ['rock', 'paper', 'scissors'].sample
    render :draw if @player_choice == @computer_choice
    case 
    when @player_choice == "rock" && @computer_choice == 'paper' then render :lose
    when @player_choice == "rock" && @computer_choice == 'scissors' then render :win
    when @player_choice == "paper" && @computer_choice == 'scissors' then render :lose
    when @player_choice == "paper" && @computer_choice == 'rock' then render :win
    when @player_choice == "scissors" && @computer_choice == 'rock' then render :lose
    when @player_choice == "scissors" && @computer_choice == 'paper' then render :win
    end
  end
end