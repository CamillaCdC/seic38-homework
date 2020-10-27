class BandsController < ApplicationController
def show
  @band = Band.find params[:id]
end

def index
  @bands = Band.all
end


def new
  @band = Band.new
end

def create
  band = Band.create band_params
  redirect_to band
end

def update
  band = Band.find params[:id]
  band.update band_params
  redirect_to band
end

def edit
  @band = Band.find params[:id]
end

def destroy
  band = Band.find params[:id]
  band.destroy
  redirect_to band
end

private

def band_params
  params.require(:band).permit(:name, :formed, :member_count, :genre, :image)
end
end