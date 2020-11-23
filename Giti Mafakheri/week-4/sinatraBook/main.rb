require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb:home
end

get '/result' do
  @bookTitle = params[:bookTitle].upcase
  @book_url ="https://www.googleapis.com/books/v1/volumes?q=title:#{@bookTitle}"
  @info = HTTParty.get @book_url;
  erb:result
end
