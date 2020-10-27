class PagesController < ApplicationController
  # action on home page and render it
  def home
    @countries = Country.all
  end

  # action on any country page and render it
  def country
    @country = Country.find params[:id]
  end

  # render :new
  def new
  end

  # action on create a country and render :create
  def create
    country = Country.create :name => params[:name],
                             :flag => params[:flag],
                             :continent => params[:continent],
                             :area => params[:area],
                             :population => params[:population],
                             :gdp => params[:gdp],
                             :hdi => params[:hdi]
    redirect_to country_path(country.id)
  end

  # action for the edit page and render :edit
  def edit
    @country = Country.find params[:id]
  end

  # update any country info and render :update
  def update
    country = Country.find params[:id]

    country.name = params[:name]
    country.flag = params[:flag]
    country.continent = params[:continent]
    country.area = params[:area]
    country.population = params[:population]
    country.gdp = params[:gdp]
    country.hdi = params[:hdi]
    country.save

    redirect_to country_path(country.id)
  end

  # delete a country page and render :delete
  def delete
    country = Country.find params[:id]
    country.destroy
    redirect_to root_path
  end

end
