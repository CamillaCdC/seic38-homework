require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
  erb :home
end

get "/books" do
  @book_title = params[:book_title]
  @book_url = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @thumbnail = @book_url["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :books
end
