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

  @info = HTTParty.get @book_url
binding.pry
  # @book_title = @info
  @img = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :thumbnail
end
