require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
erb :home
end

get '/searchresult' do
@title = params[:book_title].capitalize #input title
@book_url = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
begin
@author = @book_url["items"][0]["volumeInfo"]["authors"].first
@publishedDate = @book_url["items"][0]["volumeInfo"]["publisherDate"]
@publisher = @book_url["items"][0]["volumeInfo"]["publisher"]
@description = @book_url["items"][0]["volumeInfo"]["description"]
@thumbnail = @book_url["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
@price = @book_url["items"][0]["saleInfo"]["retailPrice"]["amount"]
@currency = @book_url["items"][0]["saleInfo"]["retailPrice"]["currencyCode"]
@buyLink = @book_url["items"][0]["saleInfo"]["buyLink"]
# binding.pry
rescue
redirect to('/')
end
erb :searchresult
end
