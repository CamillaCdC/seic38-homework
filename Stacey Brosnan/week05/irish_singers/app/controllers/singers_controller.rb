class SingersController < ApplicationController

  def index
    @singers = Singer.all
  end

  def show
    @singer = Singer.find params[:id]
  end

  def new
    @singer = Singer.new
  end

  def create
    singer = Singer.create singer_params
    redirect_to singer
  end

  def edit
    @singer = Singer.find params[:id]
  end

  def update
    singer = Singer.find params[:id]
    singer.update singer_params
    redirect_to singer
  end

  def destroy
    singer = Singer.find params[:id]
    singer.destroy
    redirect_to singers_path
  end

  private
  def singer_params
    params.require(:singer).permit(:name, :nationality, :gender, :dob, :image)
  end
end
