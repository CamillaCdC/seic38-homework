class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]

  end

  def new
  end

  def create
    ocean = Ocean.create :name => params[:name], :image => params[:image], :deepest_point => params[:deepest_point], :area => params[:area], :borders => params[:borders]
    redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.name = params[:name]
    ocean.image = params[:image]
    ocean.deepest_point = params[:deepest_point]
    ocean.area = params[:area]
    ocean.borders = params[:borders]
    ocean.save
    redirect_to ocean_path(ocean.id)
  end

  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end
end
