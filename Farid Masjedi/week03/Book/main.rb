require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book]
  begin
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
    @info = HTTParty.get @book_url;
    @book_previewLink = @info["items"][0]["volumeInfo"]["previewLink"]
    @book_desc = @info["items"][0]["volumeInfo"]["description"]
    @img_src = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    book_author = @info["items"][0]["volumeInfo"]["authors"]
    @book_author = if book_author.size == 1
      book_author[0]
    else
      book_author.join(', ')
    end
  rescue
    redirect to ('/')
  end
  erb :result
end
