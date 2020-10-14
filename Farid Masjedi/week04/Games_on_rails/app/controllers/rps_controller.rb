class RpsController < ApplicationController

  #for render :choose
  def choose
  end

  #the main structure of the game
  def result
    #player choice gonna be chosen by clicking on the image
    @player_choice = params[:id]

    #making the computer choice
    choices = ["Lapis", "Papyrus", "Scalpellus"]
    @computerChooses = choices.sample

    #giving and src of an image to the computer choice
    if @computerChooses == "Lapis"
      @srcc='/assets/rc.png';
    elsif @computerChooses == 'Papyrus'
      @srcc= '/assets/pc.png'
    else
      @srcc='/assets/sc.png'
    end

    #giving player chice src of an image
    if @player_choice == "Lapis"
      @src='/assets/r.png';
    elsif @player_choice == 'Papyrus'
      @src= '/assets/p.png'
    else
      @src='/assets/s.png'
    end

    #who is the winner algorithem
    if @computerChooses != @player_choice
      if @computerChooses == choices[0]
        if @player_choice == choices[1]
          @result = "Player is the Winner"
        else
          @result = "Server is the Winner"
        end

      elsif @computerChooses == choices[1]
        if @player_choice == choices[2]
          @result = "Player is the Winner"
        else
          @result = "Server is the Winner"
        end

      elsif @computerChooses == choices[2]
        if @player_choice == choices[0]
          @result = "Player is the Winner"
        else
          @result = "Server is the Winner"
        end
      end
    else
      #Theocracy : https://en.wikipedia.org/wiki/Theocracy
      @result = "Unfortunately, the theocracy changed the tied game to player wins."
    end
  end

end
