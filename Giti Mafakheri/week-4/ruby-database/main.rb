require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
#HOME
get '/' do
  erb :home
end
#INDEX
get '/hats' do
  @hats = query_db 'SELECT * FROM hats'
    erb :hats_list
end

#NEW
get '/hats/new' do
  erb:hats_new
end

#INSERT
post '/hats' do
  query = "INSERT INTO hats (name , country , isWoman) VALUES ('#{params[:name]}','#{params[:country]}','#{params[:isWoman]}')"
  query_db query
redirect to('/hats')
end

# SHOW
get '/hats/:id' do
  @hats = query_db "SELECT * FROM hats WHERE id=#{ params[:id] }"
  @hats = @hats.first # Extract the butterfly from the array.
  erb :hats_show
end


#EDIT
get '/hats/:id/edit' do
  @hat = query_db "SELECT * FROM hats WHERE id=#{ params[:id] }"
  @hat = @hat.first
  erb :hats_edit
end

#Update
post '/hats/:id' do
  query ="UPDATE hats SET  name='#{params[:name]}',country='#{params[:country]},isWoman=''#{params[:true]}' WHERE id=#{params[:id]}"
query
query_db query
redirect to("/hats/#{params[:id]}")
end





def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
db.close
results
end
