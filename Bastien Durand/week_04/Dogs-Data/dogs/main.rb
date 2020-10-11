require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# get => READ
# post => CREATE


get '/' do
  erb :home
end


# INDEX
get '/dogs' do
  @dogs = query_db 'SELECT * FROM butterflies'
  # @butterflies.to_s # smoke test - ugly dump
  erb :dogs_index
end

# NEW
get '/dogs/new' do
  erb :dogs_new
end

# CREATE
post '/dogs' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  # Execute the SQL
  query_db query
  # Show them the new butterfly
  redirect to('/dogs')  # Makes a get request
end


# SHOW

get '/dogs/:id' do
  @dogs = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @dogs = @dogs.first # Extract the butterfly from the array.
  erb :dogs_show
end

# EDIT

get '/dogs/:id/edit' do
  @dogs = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @dogs = @dogs.first # Extract the butterfly from the array.
  erb :dogs_edit
end

# UPDATE
post '/dogs/:id' do
  # Update the database
  query = "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}' WHERE id=#{params[:id] }"
  query_db query
  redirect to("/dogs/#{ params[:id] }") # get to the show page.
end


# DESTROY || DELETE

get '/dogs/:id/delete' do
  # Delete the butterfly from the Database
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  # Redirect to /butterflies
  redirect to('/dogs')
end




def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  # Connect to the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  # Execute some SQL
  results = db.execute sql_statement
  # Close the database
  db.close
  # Return the results
  results # Implicitly returned
end
