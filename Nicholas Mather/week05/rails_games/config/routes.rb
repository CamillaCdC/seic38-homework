Rails.application.routes.draw do
  root :to => 'pages#home'

  get "/8_ball" => 'ball#prediction'

  get "/secret_num" => 'num#keypad'
  get "secret_num/guess/:x" => 'num#guess'

  get "/rock" => 'rock#enter'
  get "/rock/play/:item" => 'rock#play'

end
