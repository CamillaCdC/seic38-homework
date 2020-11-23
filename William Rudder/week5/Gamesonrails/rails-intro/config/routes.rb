Rails.application.routes.draw do
root :to => 'pages#home'

get '/magic8ball' => 'magic#question'
get '/magic8ball/result' => 'magic#result'

get '/secretnumber' => 'secret#input'
get '/secretnumber/result' => 'secret#result'
get '/secretnumber/win' => 'secret#win'
get '/secretnumber/lose' => 'secret#lose'
end
