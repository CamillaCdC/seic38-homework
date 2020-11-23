class FilmsController < ApplicationController

  def index
    @films = Film.all
  end

  def show
    @film = Film.find params[:id]
  end

  def new
  end

  def create
    film = Film.create :name => params[:name], :image => params[:image], :director => params[:director], :year => params[:year], :budget => params[:budget], :gross => params[:gross]
    redirect_to film_path(film.id)
  end

  def edit
    @film = Film.find params[:id]
  end
  def update
    film = Film.find params[:id]
    film.name = params[:name]
    film.image = params[:image]
    film.director = params[:director]
    film.year = params[:year]
    film.budget = params[:budget]
    film.gross = params[:gross]
    film.save
    redirect_to film_path(film.id)
  end

  def destroy
    film = Film.find params[:id]
    film.destroy
    redirect_to films_path
  end

end
