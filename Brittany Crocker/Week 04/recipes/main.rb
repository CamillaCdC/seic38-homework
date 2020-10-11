require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX

get '/recipes' do
  @recipes = query_db "SELECT * FROM recipes"
  erb :recipes_index
end


 # New
get "/recipes/new" do
  puts "new recipe"
  erb :recipes_new
end

# CREATE
post "/recipes" do
  query = "INSERT INTO recipes (name, mealtype, image) VALUES ('#{params[:name]}', '#{params[:mealtype]}', '#{params[:image]}')"
  query_db query
  redirect to ('/recipes')
end

# SHOW
get '/recipes/:id' do
  @recipe = query_db "SELECT * FROM recipes WHERE id=#{ params[:id] }"
  # render butteflies_show
  @recipe = @recipe[0] #Extract the butterfly from the array
  erb :recipes_show
end

# Edit
get '/recipes/:id/edit' do
  @recipe = query_db "SELECT * FROM recipes WHERE id=#{ params[:id] }"
  # render butteflies_show
  @recipe = @recipe[0] #Extract the butterfly from the array
  erb :recipes_edit
end


# UPDATE
post '/recipes/:id' do
  # update the Database
  query = "UPDATE recipes SET name='#{params[:name]}', mealtype='#{params[:mealtype]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to ("/recipes/#{params[:id] }")
end

# Delete
get '/recipes/:id/delete' do
  # delete the butterfly
  query_db "DELETE from recipes WHERE id=#{ params[:id] }"
  # redirect to /butterflies
  redirect to('/recipes')
end



def query_db(sql_statement)
  puts sql_statement
  # connect to Database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = "true"
  # execute some SQL
  results = db.execute sql_statement
  # close the database
  db.close
  # return results
  results # implicitly returned
end
