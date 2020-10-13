require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty' # add party to require google books api link

book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"

get '/' do
  erb :home
end

get '/title' do
  @book_title = params[:book_title]

  @info = HTTParty.get book_url;

  @image = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :title
end
