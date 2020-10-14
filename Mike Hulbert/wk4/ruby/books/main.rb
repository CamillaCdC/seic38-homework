require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/books' do
  begin
    # Get the book title from the input
    @book_title = params[:title].to_s
    # Insert the book title into the URL string
    @book_url = "https://www.googleapis.com/books/v1/volumes?q=#{@book_title}"
    @book_info = HTTParty.get @book_url
    # Get the first item
    @first_item = @book_info["items"][0]
    # Get the book title returned from the query
    @display_title = @first_item["volumeInfo"]["title"]
    # Get text snippet
    @book_snippet = @first_item["volumeInfo"]["description"]
    # Get the author and convert array to a string
    @book_author = @first_item["volumeInfo"]["authors"].map{|i| "#{i}"}.join(",")
    # Get the id of the first item
    @book_id = @first_item["id"]
    # Insert the book id into the thumbnail URL
    @book_thumb_url = "http://books.google.com/books/content?id=#{@book_id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  rescue
    redirect to('/')
  end
  erb :result
end
