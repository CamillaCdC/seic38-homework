require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/isadult' do
  erb :isadult
end
get '/adult_yes' do
  erb :adult_yes
end
get '/adult_no' do
  erb :adult_no
end
get '/tu' do
  erb :tu
end
get '/vous' do
  erb :vous
end
get '/speaktochild_yes' do
  erb :speaktochild_yes
end
get '/speaktochild_no' do
  erb :speaktochild_no
end
get '/speak_to_adult' do
  erb :speak_to_adult
end
# get '/' do
#   erb :
# end





get '/faq' do
  erb :faq
end
