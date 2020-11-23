require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end


#INDEX: Shows all the cameras
get '/cameras' do
  @cameras = query_db 'SELECT * FROM cameras'
  erb :cameras_index
end

#SEARCH: Find a cameras by db info
get '/cameras/search' do
  puts 'search for camera'
  erb :cameras_search
end

#RESULTS: Display cameras matching search terms
get '/cameras/results' do
  #generate search terms
  @search = []
  query = ''
  params.each do |search_term|
    unless search_term[1].nil? || search_term[1].empty?
      @search << "#{search_term[0]} = '#{search_term[1]}'"
    end
  end
  query = "SELECT * FROM cameras" unless @search != []
    query = "SELECT * FROM cameras WHERE #{@search.join(" AND ")}"
  puts query
  @cameras = query_db query
  erb :cameras_results
end


  #append search terms to SQL query

#NEW: Enter details for a new camera
get '/cameras/new' do
  puts 'new camera'
  erb :cameras_new
end

#CREATE: Creates a new camera with details from
#NEW
post '/cameras' do
  query = "INSERT INTO cameras (manufacturer, model, medium, focus_type, image) VALUES ('#{params[:manufacturer]}', '#{params[:model]}', '#{params[:medium]}', '#{params[:focus_type]}', '#{params[:image]}')"
  query_db query
  redirect to('/cameras')
end

#SHOW: Show me a particular camera
get '/cameras/:id' do
  @camera = query_db "SELECT * FROM cameras WHERE id = #{ params[:id] }"
  @camera = @camera.first
  erb :cameras_show
end


#EDIT Edit the details of an existing camera
get '/cameras/:id/edit' do
  @camera = query_db "SELECT * FROM cameras WHERE id = #{params[:id]}"
  @camera = @camera.first
  erb :cameras_edit
end

#UPDATE Change a camera in the databse with the
#details from EDIT
post '/cameras/:id' do
  query = "UPDATE cameras SET
    manufacturer='#{params[:manufacturer]}',
    model='#{params[:model]}',
    medium='#{params[:medium]}',
    focus_type='#{params[:focus_type]}',
    image='#{params[:image]}'
    WHERE id ='#{params[:id]}'"
  query_db query
  redirect to("/cameras/#{params[:id]}")
end

#DESTROY Delete a camera
get '/cameras/:id/delete' do
  query_db "DELETE FROM cameras WHERE id =#{params[:id]}"
  redirect to('/cameras')
end

#A funciton for doing SQL stuff
def query_db(sql_statement)
  puts sql_statement #for command line debugging
  #connect to the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true #Don't want arrays!
  #do some SQL
  results = db.execute sql_statement
  #close the db
  db.close
  #return the results
  results #implicit return
end
