require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# home page
get '/' do
  erb :home
end

# index page
get '/consoles_index' do 
  @consoles = query_db 'SELECT * FROM consoles'
  erb :consoles_index
end

# add new page
get '/consoles_new' do 
  erb :consoles_new
end 

# create 
post "/consoles" do
  query = "INSERT INTO consoles (name, company, year, image) VALUES ('#{ params[:name] }', '#{ params[:company] }', '#{ params[:year] }', '#{ params[:image] }')"
   query_db query
   redirect to('/consoles_index')
 end

 
# show page
get '/consoles_index/:id' do
  @consoles = query_db "SELECT * FROM consoles WHERE id=#{ params[:id] }"
  @consoles = @consoles.first 
  erb :consoles_show
end


#edit link 
get '/consoles_index/:id/edit' do
@consoles = query_db "SELECT * FROM consoles WHERE id=#{ params[:id] }"
  @consoles = @consoles.first 
  erb :consoles_edit
end


# update page
post '/consoles/:id' do
  query = "UPDATE consoles SET name='#{ params[:name] }', company='#{ params[:company] }', year='#{ params[:year] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/consoles_index/#{ params[:id] }") # get to the show page.
end


# delete link 
get '/consoles_index/:id/delete' do
query_db "DELETE FROM consoles WHERE id=#{ params[:id] }"
redirect to('consoles_index')
end

# function
def query_db(sql_statement)
  puts sql_statement 
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results 
end








