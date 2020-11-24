require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  erb :home
end

get '/films' do
  @films = query_db 'SELECT * FROM films'
  erb :films_index
end

get '/films/new' do
  erb :films_new
end

#CREATE
post '/films' do
  query = "INSERT INTO films (title, director, genre, year, cover) VALUES ('#{params[:title]}', '#{params[:director]}', '#{params[:genre]}', '#{params[:year]}', '#{params[:cover]}')"
  query_db query
  redirect to('/films')
end

#SHOW
get '/films/:id' do
  @film = query_db "SELECT * FROM films WHERE id=#{ params[:id] }"
  @film = @film.first
  erb :films_show
end

#DELETE
get '/films/:id/delete' do
  query_db "DELETE FROM films WHERE id=#{ params[:id] }"
  redirect to('/films')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results #same as return results
end
