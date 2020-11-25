class PagesController < ApplicationController
  def home
    render :home
  end

  def secretnumber
    render :secretnumber
  end

  def magic8ball
    render :magic8ball
  end

  def rockpaperscissors
    render :rockpaperscissors
  end
end
