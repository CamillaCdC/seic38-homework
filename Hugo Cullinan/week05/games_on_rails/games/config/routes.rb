Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#eight_ball'
  get '/magic/results' => 'magic#results'

  get '/secret' => 'secret#pick_num'
  get '/secret/results' => 'secret#results'
end
