require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# index

get '/beaches' do
@beaches = query_db 'SELECT * FROM beaches'
  erb :beach_list
end

get '/beaches/new' do
  puts "new beach"
erb :beach_new
end



# Edit
get '/beaches/:id/edit' do
  @beach = query_db "SELECT * FROM beaches WHERE id = #{params[:id]}"
  @beach = @beach.first
  erb :beach_edit
end

# update
post '/beaches/:id' do
  query = "UPDATE beaches SET beach='#{params[:beach]}', country = '#{params[:country]}', image ='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect ('/beaches')

end

# create
post '/beaches' do
  query = "INSERT INTO beaches (beach, country, image) VALUES ('#{params[:beach]}', '#{params[:country]}', '#{params[:image]}')"
  query_db query
  redirect to ('/beaches')
end




# show
get '/beaches/:id' do
  @beach = query_db "SELECT * FROM beaches WHERE id =#{params[:id]}"
  @beach = @beach.first
  erb :beach_show
end

 # post butterfly to page
 post '/beaches/:id' do
   query = "UPDATE beaches SET beach = '#{params[:beach]}', country = '#{params[:country]}', image ='#{params[:image]}'WHERE id=#{params[:id]}"
   query_db query
   redirect to ("/beaches/#{params[:id]}") #get to show page
 end

# Delete
get '/beaches/:id/delete' do
  query_db "DELETE FROM beaches WHERE id = #{params[:id]}"
  redirect to ('/beaches')
end


# function to get connect to sql

def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
