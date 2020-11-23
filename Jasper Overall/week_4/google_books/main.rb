require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @title = params[:title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  info = HTTParty.get @book_url

  #get info for first book in search results
  @title_1 = info["items"][0]["volumeInfo"]["title"]
  @author_1 = info["items"][0]["volumeInfo"]["authors"][0]
  @thumbnail_1 = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description_1 = info["items"][0]["volumeInfo"]["description"]
  @buy_link_1 = info["items"][0]["saleInfo"]["buyLink"]

  #get info for second book in search results
  @title_2 = info["items"][1]["volumeInfo"]["title"]
  @author_2 = info["items"][1]["volumeInfo"]["authors"][0]
  @thumbnail_2 = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description_2 = info["items"][1]["volumeInfo"]["description"]
  @buy_link_2 = info["items"][1]["saleInfo"]["buyLink"]

  #get info for third book in search results
  @title_3 = info["items"][2]["volumeInfo"]["title"]
  @author_3 = info["items"][2]["volumeInfo"]["authors"][0]
  @thumbnail_3 = info["items"][2]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description_3 = info["items"][2]["volumeInfo"]["description"]
  @buy_link_3 = info["items"][2]["saleInfo"]["buyLink"]


  erb :result
end
