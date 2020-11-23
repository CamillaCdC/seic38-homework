require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:search]
  search_url = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  @background_image = search_url["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description = search_url["items"][0]["volumeInfo"]["description"]

  erb :result
end