Rails.application.routes.draw do
  root :to => 'pages#home'

  get 'magic8ball' => 'magic8ball#form'
  get 'magic8ball/result' => 'secretnumber#result'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/result' => 'secretnumber#result' # need to make logic and html.erb

  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/:throw' => 'rock_paper_scissors#result'
end
