Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/eight_ball' => 'eight_ball#form'
  get 'eight_ball/result' => 'eight_ball#result'

  get '/secret_num' => 'secret_num#form'
  get '/secret_num/result' => 'secret_num#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#play'
end
