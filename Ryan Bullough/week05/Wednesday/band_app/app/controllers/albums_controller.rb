class AlbumsController < ApplicationController
def index
  @albums = Album.all
end

def show
  @album = Album.find params[:id]
end

def create
  album = Album.create album_params
  redirect_to album
end

def new
  @album = Album.new
end

def update
  album = Album.find params[:id]
  album.update album_params
  redirect_to album
end

def edit
  @album = Album.find params[:id]
end

def destroy
  album = Album.find params[:id]
  album.destroy
  redirect_to albums_path
end
private

def album_params
  params.require(:album).permit(:title, :release_date, :meta_rating, :cover_image)
end

end