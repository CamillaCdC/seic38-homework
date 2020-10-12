require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end

get '/diving' do
  @diving_list = query_database "SELECT * FROM diving_center"
  erb :diving_index
end

get '/diving/add' do
  erb :diving_add
end

post '/diving' do
  query = "INSERT INTO diving_center (name, country, city, map, website) VALUES ('#{params[:name]}', '#{params[:country]}', '#{params[:city]}', '#{params[:map]}', '#{params[:website]}')"
  query_database query
  redirect to "/diving"
end

get '/diving/:id' do
  @diving_center = query_database "SELECT * FROM diving_center WHERE id=#{params[:id]}"
  @diving_center = @diving_center.first
  erb :diving_show
end

get '/diving/:id/edit' do
  @diving_center = query_database "SELECT * FROM diving_center WHERE id=#{params[:id]}"
  @diving_center = @diving_center.first
  erb :diving_edit
end

post '/diving/:id' do
  query = "UPDATE diving_center SET name='#{params[:name]}', country='#{params[:country]}', city='#{params[:city]}', map='#{params[:map]}', website='#{params[:website]}' WHERE id=#{params[:id]}"
  query_database query
  redirect to "/diving"
end

get '/diving/:id/delete' do
  query = "DELETE FROM diving_center WHERE id=#{params[:id]}"
  query_database query
  redirect to "/diving"
end

def query_database(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'diving_db.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
