require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#INDEX
get '/plants' do
  @plants = query_db 'SELECT * FROM plants'
  erb :plant_index
end

#NEW PAGE
get '/plants/new' do
  puts "new plant"
  erb :plant_new
end

# CREATE ACTION
get '/plants' do
  query = "INSERT INTO plants (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  #execute the SQL
  query_db query
  redirect to('/plants') # GET request
end

# SHOW PAGE
get '/plants/:id' do
  @plants = db_query "SELECT * FROM plants WHERE id=#{ params[:id] }"
  @plants = @plants.first
  erb :plant_show
end

# EDIT PAGE
get '/plants/:id/edit' do
  @plants = query_db "SELECT * FROM plants WHERE id=#{params[:id]}"
  @plants = @plants.first # Extract the plant from the array
erb :plant_edit
end

# UPDATE
get '/plants/:id' do
#update the database
query = "UPDATE plants SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
query_db query
#redirect to show
redirect to("/plants/#{ params[:id] }")
end

# DELETE / DESTROY
get '/plants/:id/delete' do
query_db "DELETE FROM plants WHERE id=#{ params[:id] }"
redirect to('/plants')
end


# FUNCTION
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
results
end
