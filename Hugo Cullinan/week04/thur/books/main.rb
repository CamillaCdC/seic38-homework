require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'



get '/' do
  erb :home
end

get '/cover' do
  @book_title = params[:title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get @book_url
  @bookcover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @author = @info["items"][0]["volumeInfo"]["authors"][0]
  @published_date = @info["items"][0]["volumeInfo"]["publishedDate"]
  @description = @info["items"][0]["volumeInfo"]["description"]
  erb :cover

end
