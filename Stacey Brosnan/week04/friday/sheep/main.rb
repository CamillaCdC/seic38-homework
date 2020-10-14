require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get "/" do
  erb :home
end


#INDEX
get "/sheep" do
  @sheep = query_db "SELECT * FROM sheep"
  erb :sheep_index
end

get "/sheep_new" do
  erb :sheep_new
end

post "/sheep" do
  @sheep = query_db "INSERT INTO sheep (breed, origin, image) VALUES ('#{params[:breed]}', '#{params[:origin]}', '#{params[:image]}')"
  redirect to("/sheep")
end

get "/sheep/:id" do
  @sheep = query_db "SELECT * FROM sheep WHERE id=#{ params[:id] }"
  @sheep = @sheep.first
  erb :sheep_show
end

#UPDATE
get "/sheep/:id/update" do
  @sheep = query_db "SELECT * FROM sheep WHERE id=#{ params[:id] }"
  @sheep = @sheep.first
  erb :sheep_update
end

#UPDATE
post "/sheep/:id" do
  @sheep = query_db "UPDATE sheep SET breed='#{params[:breed]}', origin='#{params[:origin]}', image='#{params[:image]}' WHERE id=#{ params[:id] }"
  redirect to("/sheep/#{ params[:id] }")
end

get "/sheep/:id/delete" do
  @sheep = query_db "DELETE FROM sheep WHERE id=#{ params[:id] }"
  redirect to("/sheep")
end

#function
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new "database.sqlite3"
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
