require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'




get '/' do
  erb :home
end


get '/bookcover' do
@book_title = params[:book]
@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
 @info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}")
@imageurl = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :bookcover
end
