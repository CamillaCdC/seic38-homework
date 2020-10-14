require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# home page to read
get '/' do
  @movies_info = sql 'SELECT * FROM movies'
  erb :home
end

# page for adding a new movie
get '/new' do
  erb :new
end

# posting the new movie and add it to the home page
post '/' do
  sql "INSERT INTO movies (name,year,director,imdb,img) VALUES ('#{params[:name]}',#{params[:year]},'#{params[:director]}','#{params[:imdb]}','#{params[:img]}');"
  redirect to('/')
end

# page for each movie with id = params[:id] to read
get '/:id' do
  @movie = sql "SELECT * FROM movies WHERE id=#{params[:id]}"
  @movie = @movie[0]
  erb :movie_detail
end

# page for editting any of the informations
get '/:id/edit' do
  @movie_edit = sql "SELECT * FROM movies WHERE id=#{params[:id]}"
  @movie_edit = @movie_edit[0]
  erb :edit
end

# posting the updated things to a movie page
post '/:id' do
  sql "UPDATE movies SET name='#{params[:name]}',year=#{params[:year]}, director='#{params[:director]}', imdb='#{params[:imdb]}', img='#{params[:img]}' WHERE id=#{params[:id]}"
  redirect to("/#{params[:id]}")
end

# deleting a movie
get '/:id/delete' do
  @movie_delete = sql "DELETE FROM movies WHERE id=#{params[:id]}"
  redirect to('/')
end

# a method for calling SQL queries and do some things
def sql (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3';
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
