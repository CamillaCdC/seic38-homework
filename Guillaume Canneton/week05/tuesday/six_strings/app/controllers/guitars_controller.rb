class GuitarsController < ApplicationController
  def index
    @guitars = Guitar.all
  end
  def show
    @guitar = Guitar.find params[:id]
  end
  def new

  end
  def create
    guitar = Guitar.create :brand => params[:brand], :model => params[:model], :year => params[:year], :image => params[:image], :body => params[:body], :pickups => params[:pickups]
    redirect_to guitar_path(guitar.id)
  end

  def edit
    @guitar = Guitar.find params[:id]
  end
  def update
    guitar = Guitar.find params[:id]
    guitar.brand = params[:brand]
    guitar.model = params[:model]
    guitar.year = params[:year]
    guitar.image = params[:image]
    guitar.body = params[:body]
    guitar.pickups = params[:pickups]
    guitar.save
    redirect_to guitar_path(guitar.id)
  end
  def destroy
    guitar = Guitar.find params[:id]
    guitar.destroy
    redirect_to guitars_path
  end

end
