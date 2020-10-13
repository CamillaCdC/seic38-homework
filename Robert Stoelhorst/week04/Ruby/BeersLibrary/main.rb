require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

  # INDEX page after function
  get '/beers' do
    @beers = query_db 'SELECT * FROM beers'
    erb :beers_index
  end

# NEW beers page
get '/beers/new' do
  puts "new beer"
  erb :beers_new
end

# CREATE action
post '/beers' do
  query = "INSERT INTO beers (name, type, image) VALUES ('#{ params[:name] }', '#{ params[:type] }', '#{ params[:image] }')"
  query_db query
  #execute the SQL
  # show them the new beer (somehow) ??
  # render
  redirect to('/beers') # return to the beers page after rendering
end

# SHOW page after function
get '/beers/:id' do
  @beer = query_db "SELECT * FROM beers WHERE id=#{ params[:id] }"
  @beer = @beer.first
  erb :beers_show
end

# EDIT page edit inputs
get '/beers/:id/edit' do
  @beer = query_db "SELECT * FROM beers WHERE id=#{ params[:id] }"
  @beer = @beer.first #
  erb :beers_edit
end

# Update
post '/beers/:id' do
  # update the Database
  query = "UPDATE beers SET name ='#{ params[:name] }', type='#{ params[:type] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  # redirect to show
  redirect to("/beers/#{ params[:id] }")
end

# DESTROY
get '/beers/:id/delete' do
  # delete butterfly
  query_db "DELETE FROM beers WHERE id=#{ params[:id] }"
  # redirect to /Butterflies
  redirect to('/beers')
end

  # MAIN FUNCTION to connect to database and handle changes/fetch results
  def query_db(sql_statement)
    # connect to database
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    # execute some SQL
    results = db.execute sql_statement
    # close the Database
    db.close
    # return the results/render
    results # implicitluy returned
  end
