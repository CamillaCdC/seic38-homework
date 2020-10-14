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
    mountain = Mountain.create :name => params[:name], :category => params[:category], :height => params[:height], :country => params[:country], :climate => params[:climate], :image => params[:image]
    redirect_to mountains_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.category = params[:category]
    mountain.height = params[:height]
    mountain.country = params[:country]
    mountain.climate = params[:climate]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end
end
