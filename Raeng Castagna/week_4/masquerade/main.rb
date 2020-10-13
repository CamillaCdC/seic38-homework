require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end

# INDEX
get '/masks' do
  @masks = query_db 'SELECT * FROM masks'
  erb :masks_index
end

# NEW
get '/masks/new' do
  erb :masks_new
end

# CREATE action
post '/masks' do
  query = "INSERT INTO masks (type, colour, image) VALUES ('#{params[:type]}', '#{params[:colour]}', '#{params[:image]}')"
  query_db query
  redirect to('/masks')
end

# SHOW by ID
get '/masks/:id' do
  @masks = query_db "SELECT * FROM masks WHERE id=#{params[:id]}"
  @masks = @masks.first # Extract from the array
  erb :masks_show
end

# EDIT
get '/masks/:id/edit' do
  @masks = query_db "SELECT * FROM masks WHERE id=#{params[:id]}"
  @masks = @masks.first
  erb :masks_edit
end

# UPDATE
post '/masks/:id' do
  query = "UPDATE masks SET type='#{params[:type]}', colour='#{params[:colour]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/masks/#{params[:id]}")
end

# DESTROY
get '/masks/:id/delete' do
  query_db "DELETE FROM masks WHERE id=#{params[:id]}"
  redirect to('/masks')
end

# Database Method
def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicitly returned
end
