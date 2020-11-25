require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end


#INDEX
get '/human' do
  @human = query_db 'SELECT * FROM human'
  erb :human_index
end

#NEW
get '/human/new' do
  erb :human_new
end

#CREATE
post '/human' do
  query = "INSERT INTO human (name, parts, image) VALUES ('#{params[:name]}', '#{params[:parts]}', '#{params[:image]}')"
  query_db query
  redirect to('/human')
end

#SHOW
get '/human/:id' do
  @parts = query_db "SELECT * FROM human WHERE id=#{params[:id]}"
  @parts = @parts.first
  erb :human_show
end

#EDIT
get '/human/:id/edit' do
  @parts = query_db "SELECT * FROM human WHERE id=#{params[:id]}"
  @parts = @parts.first
  erb :parts_edit
end

#UPDATE
post '/human/:id' do
  query = "UPDATE butterflies SET name='#{params[:name]}', parts='#{params[:parts]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/human/#{params[:id]}")
end

#DELETE
get '/human/:id/delete' do
  query_ab "DELETE FROM human WHERE id=#{params[:id]}"
  redirect to('/human')
end



def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  #connect to the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  #execute some SQL
  results = db.execute sql_statement
  #close the database
  db.close
  #return the result
  results #implicitly returned
end
