class RockpaperscissorsController < ApplicationController

  def home
    render :home
  end


  def throw
    @play = ["rock", "paper", "scissors", "lizard", "spock"]
    @cpu_play = @play[rand(0..4)]
    @player_play = params[:throw]

    if @cpu_play == @player_play
      @result = "draw"
    elsif @player_play == @play[0]
      if @cpu_play == @play[2] || @cpu_play == @play[2]
        @result = "victory"
      else
        @result = "defeat"
      end
    elsif @player_play == @play[1]
      if @cpu_play == @play[0] || @cpu_play == @play[4]
        @result = "victory"
      else
        @result = "defeat"
      end
    elsif @player_play == @play[2]
      if @cpu_play == @play[1] || @cpu_play == @play[3]
        @result = "victory"
      else
        @result = "defeat"
      end
    elsif @player_play == @play[3]
      if @cpu_play == @play[1] || @cpu_play == @play[4]
        @result = "victory"
      else
        @result = "defeat"
      end
    elsif @player_play == @play[4]
      if @cpu_play == @play[0] || @cpu_play == @play[2]
        @result = "victory"
      else
        @result = "defeat"
      end
    end
    render :throw
  end

end
