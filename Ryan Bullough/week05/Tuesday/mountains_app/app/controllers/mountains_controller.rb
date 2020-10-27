class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name],:elevation => params[:elevation], :location => params[:location], :first_ascent => params[:first_ascent], :image => params[:image]
    
    redirect_to mountain_path(mountain.id)
  end

  def destroy
  end

  def edit
  end

end