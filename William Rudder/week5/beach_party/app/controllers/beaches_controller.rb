class BeachesController < ApplicationController

  def index
@beaches = Beach.all
  end

  def new

  end

  def create
    beach = Beach.create :name =>params[:name], :image => params[:image], :country => params[:country]
    redirect_to beaches_path(beach.id)
  end
 end
