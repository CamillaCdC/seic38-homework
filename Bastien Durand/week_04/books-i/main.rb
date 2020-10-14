require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do

begin

@book_title = params[:title]
@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
@info = HTTParty.get @book_url

@book_image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
@book_author = @info["items"][0]["volumeInfo"]["authors"].join(', ')
@book_description = @info["items"][0]["volumeInfo"]['description']
@book_maturity_rating = @info["items"][0]["volumeInfo"]["maturityRating"].capitalize.tr('_', ' ')
@book_list_price = @info["items"][0]["saleInfo"]['retailPrice']['amount']
@book_list_price_currency = @info["items"][0]["saleInfo"]['retailPrice']['currencyCode']

rescue
  redirect to ('/')
end
  erb :result
end
