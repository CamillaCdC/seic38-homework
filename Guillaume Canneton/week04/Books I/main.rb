require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title].chomp
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  begin
    @info = HTTParty.get @book_url
  rescue
    redirect to('/')
  end
  @title = @info["items"][0]["volumeInfo"]["title"]
  @thumbnail = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @author = @info["items"][0]["volumeInfo"]["authors"][0]
  @summary = @info["items"][0]["volumeInfo"]["description"]
  @published_date = @info["items"][0]["volumeInfo"]["publishedDate"]
  @publisher = @info["items"][0]["volumeInfo"]["publisher"]

  erb :result
end

get '/faq' do
  erb :faq
end
