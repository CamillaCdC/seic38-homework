class MusiciansController < ApplicationController
def index
  @musicians = Musician.all
end


def show
  @musician = Musician.find params[:id]
end

def new
  @musician = Musician.new
end


def create
musician = Musician.create musician_params
redirect_to musician
end

def edit
  @musician = Musician.find params[:id]
end


def destroy
  musician = Musician.find params[:id]
  musician.destroy
  redirect_to musicians_path
end

def update
  musician = Musician.find params[:id]
  musician.update musician_params
  redirect_to musician
end

private
#strong parameters
def musician_params
  params.require(:musician).permit(:name, :nationality, :dob, :period, :image)
end


end
