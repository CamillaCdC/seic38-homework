require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# get '/https://www.googleapis.com/books/v1/volumes?q=title:title' do
#     { params[:title] } 
#     erb :home
# end

get '/' do
    erb :home
   
end

get '/search' do

    @book_title = params[:title]
     book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
    # 用httparty 的方法来运行
    info = HTTParty.get book_url
    @image = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @full_title = info["items"].first["volumeInfo"]["title"]
    erb :result


end


