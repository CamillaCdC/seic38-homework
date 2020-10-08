require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/thumbnail' do
  @book_name = params[:book_name].capitalize

  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_name}"
begin
  @info = HTTParty.get @book_url
  @book_title = @info["items"].first["volumeInfo"]["title"]
  @book_authors = @info["items"].first["volumeInfo"]["authors"].join(" ")
  @img = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  @book_category = @info["items"].first["volumeInfo"]["categories"].join(" ")
  @book_avg_rating = @info["items"].first["volumeInfo"]["averageRating"]
  @book_ratings_count = @info["items"].first["volumeInfo"]["ratingsCount"]
  @books_maturity_rating = @info["items"].first["volumeInfo"]["maturityRating"].capitalize.tr('_', ' ')
  @books_price = @info["items"].first["saleInfo"]["listPrice"]["amount"]
  @books_price_currency = @info["items"].first["saleInfo"]["listPrice"]["currencyCode"]

  @book_blurb = @info["items"].first["volumeInfo"]["description"]
rescue
  redirect to '/'
end
  erb :thumbnail
end
