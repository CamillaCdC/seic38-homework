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
  @book_title = @info["items"].first["volumeInfo"]["title"]
  @book_authors = @info["items"].first["volumeInfo"]["authors"].join(" ")
  @img = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_blurb = @info["items"].first["volumeInfo"]["description"]
  @book_category = @info["items"].first["volumeInfo"]["categories"].join(" ")

  erb :thumbnail
end
