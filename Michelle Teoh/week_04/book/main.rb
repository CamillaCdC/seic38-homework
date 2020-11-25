require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'book_title'
require 'httparty'


@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
@info = ["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]


get '/' do
  erb :home
end

get '/result' do
  @title = params[:title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = ["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_title = params[@book_url].upcase
  begin
  @info.close.
  end
  erb :result
end
#info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
