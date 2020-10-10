require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# NEW
get '/doughnuts/new' do
  erb :doughnuts_new
end

# CREATE
post '/doughnuts' do
  query = "INSERT INTO doughnuts (name, type, shape, image) VALUES ('#{params["name"]}', '#{params["type"]}', '#{params["shape"]}', '#{params["image"]}')"
  query_db query
  redirect to('/index')
end

# INDEX
get '/index' do
  @doughnuts = query_db 'SELECT * FROM doughnuts'
  erb :doughnuts_index
end

# EDIT
get '/doughnuts/:id/edit' do
  @doughnut = query_db("SELECT * FROM doughnuts WHERE id=' #{ params["id"] }'").first
  erb :doughnuts_edit
end

# UPDATE
post '/doughnuts/:id' do
  query = "UPDATE doughnuts SET name= '#{params[:name]}', type= '#{ params[:type] }', shape= '#{ params[:shape] }', image = '#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/doughnuts/#{ params[:id] }")
end 

# DISPLAY
get '/doughnuts/:id' do
  @doughnut = query_db("SELECT * FROM doughnuts WHERE id='#{ params["id"] }'").first
  erb :doughnuts_show
end

# DESTROY
get '/doughnuts/:id/delete' do
  query_db "DELETE FROM doughnuts WHERE id='#{params[:id]}'"
  redirect to('/index')
end

def query_db sql_statement
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end